/**
 * 1. 分析
 * (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 * @param input
 */

/********************** (/^▽^)/ **********************/
function tokenizer (input) {
  let current = 0 // 追踪位置

  let tokens = [] //标识符

  while (current < input.length) {
    // 获得字符
    let char = input[current]

    // ** 判断括号
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      })

      current++
      continue
    }

    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')'
      })

      current++
      continue
    }

    // ** 判断空格，如果是空格的话，直接跳过
    let WHITESPACE = /\s/
    if (WHITESPACE.test(char)) {
      current++
      continue
    }

    // ** 接下来是数字：光获得一位数字意义似乎没有那么大，最好是获得完整的一组
    let NUMBERS = /[0-9]/
    if (NUMBERS.test(char)) {
      let value = ''

      while (NUMBERS.test(char)) {
        value += char
        char = input [++current]
      }

      tokens.push({
        type: 'number',
        value
      })

      continue
    }

    // ** 支持字符 例如(concat "foo" "bar")
    if (char === '"') {
      let value = ''
      char = input[++current]

      while (char !== '"') {
        value += char
        char = input[++current]
      }

      char = input[++current]

      tokens.push({
        type: 'string',
        value
      })
    }

    // *** 解析操作符
    let LETTERS = /[a-z]/i
    if (LETTERS.test(char)) {
      let value = ''
      while (LETTERS.test(char)) {
        value += char
        char = input[++current]
      }

      tokens.push({
        type: 'name',
        value
      })
      continue
    }

    throw new TypeError('I dont know what this character is: ' + char)
  }

  return tokens
}

let _tokens = tokenizer('(add 2 (subtract 4 2))')

console.info(_tokens)

/********************** ヽ/❀o ل͜ o\ﾉ **********************/

function parser (tokens) {
  let current = 0

  function walk () {
    let token = tokens[current]
    if (token.type === 'number') {
      current++

      return {
        type: 'NumberLiteral',
        value: token.value
      }
    }

    if (token.type === 'string') {
      current++
      return {
        type: 'StringLiteral',
        value: token.value
      }
    }

    // 处理括号
    if (token.type === 'paren' && token.value === '(') {
      // 跳过括号下一位应该是方法
      token = tokens[++current]
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: []
      }

      // 下一位
      token = tokens[++current]

      // 查找 params
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
        ) {
        // we'll call the `walk` function which will return a `node` and we'll
        // push it into our `node.params`.
        node.params.push(walk())
        token = tokens[current]
      }

      current++
      return node
    }
    throw new TypeError(token.type)
  }

  let ast = {
    type: 'Program',
    body: []
  }

  while (current < tokens.length) {
    ast.body.push(walk())
  }

  return ast
}

let _ast = parser(_tokens)
console.info(JSON.stringify(_ast))

/********************** ⌒(❀>◞౪◟<❀)⌒ **********************/
/**
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */
function traverser (ast, visitor) {
  function traverseArray (array, parent) {
    array.forEach(child => {
      traverseNode(child, parent)
    })
  }

  function traverseNode (node, parent) {
    let methods = visitor[node.type]

    if (methods && methods.enter) {
      methods.enter(node, parent)
    }

    //
    switch (node.type) {
      case 'Program':
        traverseArray(node.body, node)
        break
      case 'CallExpression':
        traverseArray(node.params, node)
        break

      case 'NumberLiteral':
      case 'StringLiteral':
        break
      default:
        throw new TypeError(node.type)
    }

    if (methods && methods.exit) {
      methods.exit(node, parent)
    }
  }

  traverseNode(ast, null)
}

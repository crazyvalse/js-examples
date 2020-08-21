/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 *
 * (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */


function tokenizer (content) {
  let tokens = []

  for (let i = 0; i < content.length; i++) {
    let char = content[i]

    let WHITESPACE = /\s/
    if (WHITESPACE.test(char)) {
      continue
    }

    // 括号
    if (char === '(' || char === ')') {
      tokens.push({
        type: 'paren',
        value: char
      })

      continue
    }

    // 方法名 - 连续几个非空格的字母组成，需要连续判断
    let LETTERS = /[a-z]/i
    if (LETTERS.test(char)) {
      let value = ''
      while (LETTERS.test(char)) {
        value += char
        char = content[++i]
      }

      tokens.push({
        type: 'name',
        value
      })

      i--
      continue
    }

    // 参数 - 数字、字符串
    let NUMBERS = /[0-9]/
    if (NUMBERS.test(char)) {
      let value = ''
      while (NUMBERS.test(char)) {
        value += char
        char = content[++i]
      }

      tokens.push({
        type: 'number',
        value
      })
      i--
      continue
    }

    // 字符串 "foo" "bar"，碰到 "，开始，往后访问字符，直到碰到下一个"
    if (char === '"') {
      let value = ''
      char = content[++i]
      while (char !== '"') {
        value += char
        char = content[++i]
      }

      tokens.push({
        type: 'string',
        value
      })
    }
  }
  return tokens
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */
/**
 * 1. 最外层是 Program
 * 2. 其他的都在body中
 * 3. 方法的最外层是 CallExpression 方法
 * 4. 里面是参数数组
 * 5.
 * @param tokens
 */
function parser (tokens) {
  let current = 0

  let ast = {
    type: 'Program',
    body: []
  }

  while (current < tokens.length) {
    ast.body.push(walker())
  }

  function walker () {
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

    if (token.type === 'paren' && token.value === '(') {
      token = tokens[++current]
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: []
      }

      token = tokens[++current]

      // 处理 params
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
        ) {
        node.params.push(walker())
        token = tokens[current]
      }

      current++
      return node
    }

    throw new TypeError(token.type)
  }

  return ast
}

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

function transformer (ast) {
  let newAst = {
    type: 'Program',
    body: [],
  }
  ast._context = newAst.body
  traverser(ast, {
    NumberLiteral: {
      enter (node, parent) {
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        })
      },
    },
    StringLiteral: {
      enter (node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        })
      },
    },
    CallExpression: {
      enter (node, parent) {
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        }

        node._context = expression.arguments
        if (parent.type !== 'CallExpression') {
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          }
        }
        parent._context.push(expression)
      },
    }
  })
  return newAst
}

function codeGenerator(node) {
  switch (node.type) {
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...because we like to code the *correct* way)
      );
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );
    case 'Identifier':
      return node.name;
    case 'NumberLiteral':
      return node.value;
    case 'StringLiteral':
      return '"' + node.value + '"';
    default:
      throw new TypeError(node.type);
  }
}

/**
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // and simply return the output!
  return output;
}

module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler
}

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

function transformer (ast) {
  let newAst = {
    type: 'Program',
    body: []
  }

  ast._context = newAst.body

  return newAst
}

module.exports = {
  tokenizer,
  parser,
  transformer
}

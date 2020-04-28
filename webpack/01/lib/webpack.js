const babel = require('@babel/core')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const fs = require('fs')
const path = require('path')

module.exports = class Webpack {
  constructor (options) {
    // console.log(options)
  }

  run () {
    const entryFile = '/Users/CodingNutsZac/Documents/github/jss-examples/webpack/01/src/index.js'
    const contents = fs.readFileSync(entryFile, 'utf-8')
    const ast = parser.parse(contents, {
      sourceType: 'module'
    })

    // console.info(JSON.stringify(ast))
    // const dependencies = {}
    // traverse(ast, {
    //   ImportDeclaration ({ node }) {
    //     const newPath = './' + path.join(
    //       path.dirname(entryFile),
    //       node.source.value
    //     )
    //     dependencies[node.source.value] = newPath
    //     console.log(dependencies)
    //   }
    // })
    //
    // console.info(JSON.stringify(ast))

    const { code } = babel.transformFromAst(ast, null, {
      presets: ['@babel/preset-env']
    })
    console.log(code)
  }
}

const a = {
  'type': 'File',
  'start': 0,
  'end': 108,
  'loc': { 'start': { 'line': 1, 'column': 0 }, 'end': { 'line': 5, 'column': 0 } },
  'errors': [],
  'program': {
    'type': 'Program',
    'start': 0,
    'end': 108,
    'loc': { 'start': { 'line': 1, 'column': 0 }, 'end': { 'line': 5, 'column': 0 } },
    'sourceType': 'module',
    'interpreter': null,
    'body': [{
      'type': 'ImportDeclaration',
      'start': 0,
      'end': 32,
      'loc': { 'start': { 'line': 1, 'column': 0 }, 'end': { 'line': 1, 'column': 32 } },
      'specifiers': [{
        'type': 'ImportSpecifier',
        'start': 9,
        'end': 14,
        'loc': { 'start': { 'line': 1, 'column': 9 }, 'end': { 'line': 1, 'column': 14 } },
        'imported': {
          'type': 'Identifier',
          'start': 9,
          'end': 14,
          'loc': { 'start': { 'line': 1, 'column': 9 }, 'end': { 'line': 1, 'column': 14 }, 'identifierName': 'sayHi' },
          'name': 'sayHi'
        },
        'local': {
          'type': 'Identifier',
          'start': 9,
          'end': 14,
          'loc': { 'start': { 'line': 1, 'column': 9 }, 'end': { 'line': 1, 'column': 14 }, 'identifierName': 'sayHi' },
          'name': 'sayHi'
        }
      }],
      'source': {
        'type': 'StringLiteral',
        'start': 22,
        'end': 32,
        'loc': { 'start': { 'line': 1, 'column': 22 }, 'end': { 'line': 1, 'column': 32 } },
        'extra': { 'rawValue': './export', 'raw': '\'./export\'' },
        'value': './export'
      }
    }, {
      'type': 'ExpressionStatement',
      'start': 34,
      'end': 71,
      'loc': { 'start': { 'line': 3, 'column': 0 }, 'end': { 'line': 3, 'column': 37 } },
      'expression': {
        'type': 'CallExpression',
        'start': 34,
        'end': 71,
        'loc': { 'start': { 'line': 3, 'column': 0 }, 'end': { 'line': 3, 'column': 37 } },
        'callee': {
          'type': 'Identifier',
          'start': 34,
          'end': 39,
          'loc': { 'start': { 'line': 3, 'column': 0 }, 'end': { 'line': 3, 'column': 5 }, 'identifierName': 'sayHi' },
          'name': 'sayHi'
        },
        'arguments': [{
          'type': 'StringLiteral',
          'start': 40,
          'end': 70,
          'loc': { 'start': { 'line': 3, 'column': 6 }, 'end': { 'line': 3, 'column': 36 } },
          'extra': { 'rawValue': 'hi, this is welcome from zac', 'raw': '\'hi, this is welcome from zac\'' },
          'value': 'hi, this is welcome from zac'
        }]
      }
    }, {
      'type': 'ExpressionStatement',
      'start': 72,
      'end': 107,
      'loc': { 'start': { 'line': 4, 'column': 0 }, 'end': { 'line': 4, 'column': 35 } },
      'expression': {
        'type': 'CallExpression',
        'start': 72,
        'end': 107,
        'loc': { 'start': { 'line': 4, 'column': 0 }, 'end': { 'line': 4, 'column': 35 } },
        'callee': {
          'type': 'MemberExpression',
          'start': 72,
          'end': 84,
          'loc': { 'start': { 'line': 4, 'column': 0 }, 'end': { 'line': 4, 'column': 12 } },
          'object': {
            'type': 'Identifier',
            'start': 72,
            'end': 79,
            'loc': {
              'start': { 'line': 4, 'column': 0 },
              'end': { 'line': 4, 'column': 7 },
              'identifierName': 'console'
            },
            'name': 'console'
          },
          'property': {
            'type': 'Identifier',
            'start': 80,
            'end': 84,
            'loc': {
              'start': { 'line': 4, 'column': 8 },
              'end': { 'line': 4, 'column': 12 },
              'identifierName': 'info'
            },
            'name': 'info'
          },
          'computed': false
        },
        'arguments': [{
          'type': 'StringLiteral',
          'start': 85,
          'end': 106,
          'loc': { 'start': { 'line': 4, 'column': 13 }, 'end': { 'line': 4, 'column': 34 } },
          'extra': { 'rawValue': 'hello webpack index', 'raw': '\'hello webpack index\'' },
          'value': 'hello webpack index'
        }]
      }
    }],
    'directives': []
  },
  'comments': []
}

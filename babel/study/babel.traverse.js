const babel = require('@babel/core')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default

const code = `function square(n) {
  return n * n;
}`

const options = { ast: true, code: true }

const ast = parser.parse(code)
traverse(ast, {
  enter (path) {
    console.info(path)
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x'
    }
  }
})
babel.transformFromAst(ast, { ast: true, code: true }, function (err, result) {
  const { code, map, ast } = result
  // console.info(code)
})

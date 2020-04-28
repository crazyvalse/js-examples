var babel = require('@babel/core')

const sourceCode = `
const result = {code: 1, map: 2, ast: 3}
const { code, map, ast } = result
`
// 地址： https://babeljs.io/docs/en/options
const options = { ast: true, code: true }

// 1. transform
babel.transform(sourceCode, options, function (err, result) {
  const { code, map, ast } = result

  // console.info(code)
  // console.info(map)
  // console.info(ast)
})

// 2. transformFromAst
const parsedAst = babel.parse(sourceCode, { parserOpts: { allowReturnOutsideFunction: true } })
babel.transformFromAst(parsedAst, sourceCode, options, function (err, result) {
  const { code, map, ast } = result
  console.info(code)
  console.info(map)
  console.info(ast)
})


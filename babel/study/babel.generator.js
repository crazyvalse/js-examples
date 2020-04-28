const { parse } = require('@babel/parser')
const generate = require('@babel/generator').default

const a = `
function sum (numberA, numberB) {
  return numberA + numberB
}
`
const b = 'var b = 2;'
const astA = parse(a, { sourceFilename: 'a.js' })
const astB = parse(b, { sourceFilename: 'b.js' })
const ast = {
  type: 'Program',
  body: [].concat(astA.program.body, astB.program.body)
}

const { code, map } = generate(ast, { comments: false, sourceMaps: true, compact: true, minified: true }, {
  'a.js': a,
  'b.js': b
})

console.info(code)

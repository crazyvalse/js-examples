var jsonic = require('jsonic')

const t = `{selector: 'a'}`
const j = jsonic(t)
console.info(typeof jsonic(t))
console.info(j['selector'])

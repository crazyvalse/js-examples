const longestCommonPrefix = require('../../src/03_longestCommonPrefix/01')

test('strs = ["flower","flow","flight"], then return "fl" ', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl')
})

// test('strs = ["flower","flow","flight"], then return "fl" ', () => {
//   expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl')
// })

/**
 * 1. 以第一个词为标准
 * 2. 每次从第一个词中取出一个字母作为前缀 - targetArr =
 * 3. 遍历数组 - 判断前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = ''
  if (Array.isArray(strs) && strs.length > 0) {
    let t = strs[0].split('')
    for (let index = 0; index < t.length; index++) {
      item = t[index]
      prefix += item
      for (let i = 1; i < strs.length; i++) {
        if (prefix !== strs[i].substring(0, index + 1)) {
          return prefix.substring(0, prefix.length - 1)
        }
      }
    }
  }
  // return 'fl'
  return new Error('wrong!')
}

module.exports = longestCommonPrefix

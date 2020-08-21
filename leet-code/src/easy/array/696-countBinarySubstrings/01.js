/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 1. 需要一个变量记录 当前字符，另外一个变量记录出现的次数
 * 2. 遍历剩下的
 * 3. 当接下来的字符 === 当前的 count ++
 * 4. 出现第一个不一样的，需要看接下来几个是不是跟不一样的一样
 * 需要两层遍历
 * @param {string} s
 * @return {number}
 */
let countBinarySubstrings = function (s) {
  let ss = s.split('')
  let curCount = 0
  let total = 0

  for (let i = 0; i < ss.length; i++) {
    let nextChar = null
    let nextCount = 0
    for (let j = i + 1; j < ss.length; j++) {
      // 不是连续
      if (nextChar !== null && ss[i] !== ss[j] && curCount === nextCount) {
        total++
        break
      }

      if (nextChar !== null && ss[i] !== ss[j] && curCount > nextCount) {
        nextCount++
      }

      if (nextChar !== null && ss[i] !== ss[j] && curCount < nextCount) {
        break
      }

      // 当前是连续的
      if (nextChar === null && ss[i] === ss[j]) {
        curCount++
      }
      // 不是连续的了
      if (nextChar === null && ss[i] !== ss[j]) {
        nextChar = ss[j]
        nextCount++
      }
    }
  }
  return total
}

console.info(countBinarySubstrings('00110011'))

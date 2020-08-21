/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 示例:
 *  输入："23"
 *  输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *  首先需要有一个字母的数组
 *  1. 只对数组前两个做操作
 *  2. 遍历第一个数组，拼接第二个数组中的字符串
 *  3. 得到的结果，splice(0, 2, result)
 *  4. 获得一个新的数组
 *  5. 继续递归当前的逻辑
 * @param {string} digits
 * @return {string[]}
 */
// [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']]
let letterCombinations = function (digits) {
  let numChars = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']]
  let numbs = (digits + '').split('')
  let dig = numbs.map((num) => numChars[parseInt(num - 2)])
  return carer(dig)
}

function carer (digits) {
  if (digits.length > 1) {
    const first = digits[0]
    const second = digits[1]
    let result = []
    for (let i = 0; i < first.length; i++) {
      for (let j = 0; j < second.length; j++) {
        result.push(first[i] + second[j])
      }
    }
    digits.splice(0, 2, result)
    return carer(digits)
  } else {
    return digits
  }
}

console.info(letterCombinations('23'))

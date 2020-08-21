/**
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 示例 1:
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 *
 * 1. 把字符串变成数组
 * 2. 针对数组中的单词做逆转
 *  a. 把单词变成数组，然后reverse 然后 join
 * @param {string} s
 * @return {string}
 */
let reverseWords = function (s) {
  if (typeof s === 'string') {
    return s.split(' ').map((word) => {
      return word.split('').reverse().join('')
    }).join(' ')
  }
  return null
}

module.exports = reverseWords

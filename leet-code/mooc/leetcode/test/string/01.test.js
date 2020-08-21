import revertByword from '../../src/string/01.js'

console.info(revertByword)
test('反转字符串', _ => {
  console.info('--------', revertByword('Let\'s take LeetCode contest'))
  expect(revertByword('Let\'s take LeetCode contest')).toBe('s\'teL ekat edoCteeL tsetnoc')
})

const twoSum = require('../../src/01_twoSum/01')
const twoSum2 = require('../../src/01_twoSum/02')
const twoSum3 = require('../../src/01_twoSum/03')

test('01 - nums = [2, 7, 11, 15], target = 9, then return [0, 1] ', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('02 - nums = [2, 7, 11, 15], target = 18, then return [1, 2] ', () => {
  expect(twoSum2([2, 7, 11, 15], 18)).toEqual([1, 2])
})

test('03 - nums = [1,3,4,2], target = 6, then return [2, 3] ', () => {
  expect(twoSum3([1,3,4,2], 6)).toEqual([2, 3])
})

test('03 - nums = [2, 7, 11, 15], target = 18, then return [2, 3] ', () => {
  expect(twoSum3([2, 7, 11, 15], 18)).toEqual([1, 2])
})

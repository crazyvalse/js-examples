// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
//
// 示例:
//
//   给定 nums = [2, 7, 11, 15], target = 9
//
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * 两次hash
 * 1. 做一个hashmap
 * 2. 从hashmap中寻找值
 * 3. 直接返回
 * @param nums
 * @param target
 */
var twoSum = function (nums, target) {
  let sumMap = {}
  for (let i = 0; i < nums.length; i++) {
    sumMap[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    if (sumMap[key] && sumMap[key] !== i) {
      return [i, sumMap[key]]
    }
  }

  return new Error('none!')
}
module.exports = twoSum

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
 * 时间复杂度 n平方
 * 空间 1
 * @param nums
 * @param target
 * @returns {*}
 */
var twoSum = function (nums, target) {
  if (Array.isArray(nums) && Number.isInteger(target)) {
    for (let x = 0; x < nums.length; x++) {
      for (let y = x + 1; y < nums.length; y++) {
        if (target === nums[x] + nums[y]) {
          return [x, y]
        }
      }
    }
  }
  return null
}

module.exports = twoSum

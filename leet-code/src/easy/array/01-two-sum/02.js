/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */
/**
 * 1. 创建一个map key = 值 value= 索引
 * 2. 使用 target - nums[i] 看是否在map中
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {}
  nums.forEach((num, index) => {
    map[num] = index
  })

  // 判断
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]]) {
      return [i, map[target - nums[i]]]
    }
  }
  return []
}

console.info(twoSum([2, 7, 11, 15], 9))

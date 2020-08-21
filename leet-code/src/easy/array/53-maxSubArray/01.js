/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 *
 * 1. 第一层遍历： 获得起始点
 * 2. 第二层遍历： 把后面
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  let maxNum = null
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      maxNum = nums[i]
    }
    let tn = 0
    for (let j = i; j < nums.length; j++) {
      tn += nums[j]
      if (maxNum <= tn){
        maxNum = tn
      }
    }
  }
  return maxNum
}

console.info(maxSubArray([-2, 1]))


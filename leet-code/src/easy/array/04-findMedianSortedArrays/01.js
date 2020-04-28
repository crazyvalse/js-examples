/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * 则中位数是 2.0
 *
 * 示例 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 则中位数是 (2 + 3)/2 = 2.5
 */
/**
 * 1. 合并数组
 * 2. 排序
 * 3. 找到中间的索引
 * 4. 找到数组中的值
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  nums1 = nums1.concat(nums2)
  nums1 = nums1.sort((n, m) => {
    return n - m >= 0
  })

  // 偶数个
  if (nums1.length % 2 === 0) {
    let p = Math.floor(nums1.length / 2)
    return (nums1[p - 1] + nums1[p]) / 2
  }
  // 奇数个
  else {
    return nums1[Math.ceil(nums1.length / 2) - 1]
  }
}

console.info(findMedianSortedArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4], [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]))

let n = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]
console.info(n.sort((n, m) => {
  return parseInt(n) - parseInt(m) <= 0
}))

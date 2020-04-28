/**
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
 * 示例 1:
 *
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 双指针
 * i 慢指针
 * j 快指针
 * j遍历，把新值赋值给i
 * 然后 i ++
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    // 1. 如果nums[i] !== num[j]
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j]
    }
  }
  return i + 1
}

console.info(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

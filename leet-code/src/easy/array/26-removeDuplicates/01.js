/**
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
 * 示例 1:
 *
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 1. while 循环
 * 2. t记录上一个数字，如果跟当前的相等，删除当前的数据
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pre = null, i = 0
  while (i < nums.length) {
    // 1. 如果想当删除当前的值
    if (pre === nums[i]) {
      nums.splice(i, 1)
    }
    // 2. 如果不相等赋值
    else {
      pre = nums[i++]
    }
  }
  return nums
}

console.info(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

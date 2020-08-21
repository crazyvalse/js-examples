/**
 * 1. 将数组第一个位置设为下边界 0
 * 2. 将数组最后一个元素所在的位置设为上边界 数组长度 - 1
 * 3. 若下边界等于或小于上边界，进行如下操作：
 *  a. 将中点设为 （上边界 + 下边界） / 2；
 *  b. 如果中点的元素小于查询的值，则将下边界设置为中点元素所在下标加1；
 *  c. 如果中点的元素大于查询的值，则将下边界设置为中点元素所在下标减1；
 *  d. 否则中点的元素即为要查找的数据，可以进行返回；
 *
 * @param arr
 * @param data
 */
function binSearch (arr, data) {
  let upperBound = arr.length - 1
  let lowerBound = 0
  while (lowerBound <= upperBound) {
    let mid = Math.floor((upperBound + lowerBound) / 2)
    if (arr[mid] < data) {
      lowerBound = mid + 1
    } else if (arr[mid] > data) {
      upperBound = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

let nums = []
for (let i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101)
}

nums = nums.sort((m, n) => {
  if (m < n) return -1
  else if (m > n) return 1
  else return 0
})
console.info(nums)
console.info(binSearch(nums, 41))

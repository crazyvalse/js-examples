// push() unshift()

let nums = [1, 2, 3, 4, 5, 6]
var newEle = [11, 22, 33]
nums.splice(3, 0, newEle)

console.info(nums, newEle)  // [ 1, 2, 3, [ 11, 22, 33 ], 4, 5, 6 ] [ 11, 22, 33 ]

nums = [1, 2, 3, 4, 5, 6]

nums.splice(3, 0, 44, 55, 66)
console.info(nums)
nums.splice(3, 3)
console.info(nums)

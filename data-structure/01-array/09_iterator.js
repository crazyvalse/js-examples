// foreach 迭代
let nums = [2, 4, 6, 8, 10]
nums.forEach((item, index) => {console.info(item, index)})
console.info('--------------')

// every 每个函数都返回 true，则这个方法返回 true
let isEven = nums.every((item) => item % 2 === 0)
console.info(isEven)
console.info('--------------')

let se = [].concat(nums, 1, 2, 3)
//some 只有一个元素使得该函数返回 true， 该函数返回 true
var someEven = nums.some((item) => item % 2 === 0)
console.info(someEven)


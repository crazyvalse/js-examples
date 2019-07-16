// foreach
/*var nums = [1, 2, 3, 4, 5, 6, 7, 8]
nums.forEach((num) => {
  console.info(num, num * num)
})*/

// every
/*
function isEven (num) {
  return num % 2 === 0
}

var nums = [2, 4, 6, 8, 10]
var even = nums.every(isEven)
if (even) {
  console.info('all numbers are even!')
} else {
  console.info('not all numbers are even')
}
*/

// some
// function isEven (num) {
//   return num % 2 === 0
// }
//
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var someEven = nums.some(isEven)
// console.info(someEven)

// reduce
/*var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var sum = nums.reduce((total, item) => total + item)
console.info(sum, nums)*/

// concat
/*var words = ['the', 'quick', 'brown', 'fox']
var sentence = words.reduce((total, item) => total + ' ' + item)
console.info(sentence)*/

// reduceRight
/*var words = ['the', 'quick', 'brown', 'fox']
var sentence = words.reduceRight((total, item) => total + ' ' + item)
console.info(sentence)*/




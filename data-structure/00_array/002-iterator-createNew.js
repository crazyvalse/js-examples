// map() 和 filter() 可以产生新数组
// map
/*
function curve (grade) {
  return grade += 5
}

var grades = [77, 65, 81, 92, 83]
var newGrade = grades.map(curve)
console.info(newGrade, grades)
*/

// filter
/*var nums = []
for (var i = 0; i < 20; ++i) {
  nums[i] = i + 1
}

var evens = nums.filter((item) => item % 2 === 0)
console.info('evens numbers: ', evens.toString())
var odds = nums.filter((item) => item % 2 === 1)
console.info('odd numbers: ', odds.toString())*/

/*var grades = []
for (var i = 0; i < 20; i++) {
  grades[i] = Math.floor(Math.random() * 101)
}

var passedGrades = grades.filter((item) => item > 60)
console.info('all grades: ', grades.sort())
console.info('all passed grades: ', passedGrades.sort())*/

var words = ['receive', 'deceive', 'perceive', 'deceit', 'conceive']
var misspelled = words.filter((item) => item.indexOf('ceive') !== -1)
console.info(misspelled)


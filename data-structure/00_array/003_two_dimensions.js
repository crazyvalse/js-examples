/*
var twod = []
var rows = 5
for (var i = 0; i < rows; i++) {
  twod[i] = []
}

Array.matrix = function (numrows, numcols, initial) {
  var arr = []
  for (var i = 0; i < numrows; ++i) {
    var columns = []
    for (var j = 0; j < numcols; j++) {
      columns[j] = initial
    }
    arr[i] = columns
  }
  return arr
}

var nums = Array.matrix(5, 5, 8)
console.info(nums)
*/

var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]]
var total = 0
var average = 0.0
for (var row = 0; row < grades.length; row++) {
  for (var col = 0; col < grades[row].length; col++) {
    total += grades[row][col]
  }

  average = total /grades[row].length
  console.info('student ' + parseInt(row + 1) + ' average: ' + average.toFixed(2))
  total = 0
  average = 0.0
}

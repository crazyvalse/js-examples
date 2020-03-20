function HashTable () {
  this.table = new Array(137)
  this.simpleHash = simpleHash
  this.betterHash = betterHash
  this.showDistro = showDistro
  this.put = put
}

// 霍纳算法
function betterHash (string, arr) {
  const H = 37
  let total = 0
  for (let i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i)
  }

  total = total % arr.length
  return parseInt(total)
}

function simpleHash (data) {
  let total = 0
  for (let i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i)
  }
  return total % this.table.length
}

function put (data) {
  var pos = this.betterHash(data, this.table)
  this.table[pos] = data
}

function showDistro () {
  let n = 0
  for (let i = 0; i < this.table.length; ++i) {
    if (this.table[i] !== undefined) {
      console.info(`${i}: ${this.table[i]}`)
    }
  }
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function genStuData (arr) {
  for (let i = 0; i < arr.length; ++i) {
    let num = ''
    for (let j = 1; j <= 9; ++j) {
      num += Math.floor(Math.random() * 10)
    }
    num += getRandomInt(50, 100)
    arr[i] = num
  }
}

let numStudents = 10
let arrSize = 97
let idLen = 9
let students = new Array(numStudents)

genStuData(students)
console.info('student data: ')
for (let i = 0; i < students.length; ++i) {
  console.info(students[i].substring(0, 8) + ' ' + students[i].substring(9))
}
console.info('Data distribution: ')
let hTable = new HashTable()
for (let i = 0; i < students.length; i++) {
  hTable.put(students[i])
}

hTable.showDistro()

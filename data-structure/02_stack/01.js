function Stack () {
  this.dataStore = []
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.clear = clear
  this.length = length
}

function push (element) {
  this.dataStore[this.top++] = element
}

function pop () {
  return this.dataStore[--this.top]
}

function peek () {
  return this.dataStore [this.top - 1]
}

function length () {
  return this.top
}

function clear () {
  this.top = 0
}

// ************ 测试
// var s = new Stack()
// s.push('David')
// s.push('Raymond')
// s.push('Bryan')
//
// console.info(`length: ${s.length()}`)
// console.info(s.peek())
//
// var popped = s.pop()
// console.info(`The popped element is: ` + popped)
// console.info(s.peek())
//
// s.push('Cynthia')
// console.info(s.peek())
//
// s.clear()
// console.info(`length: ${s.length()}`)

// ************ 数制间的互相转换
function mulBase (num, base) {
  let s = new Stack()
  do {
    s.push(num % base)
    num = Math.floor(num /= base)
  } while (num > 0)

  let converted = ''
  while (s.length() > 0) {
    converted += s.pop()
    s.pop()
  }
  return converted
}

console.info(mulBase(9, 49))

console.info(`49 convert to base 9 is ${mulBase(49, 9)}`)

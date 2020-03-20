function HashTable () {
  this.table = new Array(137)
  this.simpleHash = simpleHash
  this.betterHash = betterHash
  this.showDistro = showDistro
  this.put = put
  this.get = get
  this.buildChains = buildChains
}

// 霍纳算法
function betterHash (string, arr) {
  const H = 37
  let total = 0
  for (let i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i)
  }

  total = total % this.table.length
  return parseInt(total)
}

function simpleHash (data) {
  let total = 0
  for (let i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i)
  }
  return total % this.table.length
}

// 第一个用来保存 key，第二个用来保存 value
function put (key, data) {
  let pos = this.betterHash(key, this.table)
  let index = 0
  if (this.table[pos][index] === undefined) {
    this.table[pos][index] = key
    this.table[pos][index + 1] = data
  } else {
    while (this.table[pos][index] !== undefined) {
      ++index
    }
    this.table[pos][index] = key
    this.table[pos][index + 1] = data
  }
}

function get (key) {
  let index = 0
  let pos = this.betterHash(key, this.table)
  if (this.table[pos][index] === key) {
    return this.table[pos][index + 1]
  } else {
    while (this.table[pos][index + 1] !== key) {
      index += 2
    }
    return this.table[pos][index + 1]
  }
  return undefined
}

function showDistro () {
  let n = 0
  for (let i = 0; i < this.table.length; ++i) {
    if (this.table[i][0] !== undefined) {
      console.info(`${i}: ${this.table[i]}`)
    }
  }
}

function buildChains () {
  for (let i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array()
  }
}

let hTable = new HashTable()
hTable.buildChains()

let someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan']
for (let i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i], 'value - ' + someNames[i])
}
hTable.showDistro()

console.info(hTable.get('David'))

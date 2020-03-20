function HashTable () {
  this.table = new Array(137)
  this.simpleHash = simpleHash
  this.showDistro = showDistro
  this.put = put
}

function simpleHash (data) {
  let total = 0
  for (let i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i)
  }
  console.info(`Hash value: ${data} -> ${total}`)
  return total % this.table.length
}

function put (data) {
  var pos = this.simpleHash(data)
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

let someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan']
let hTable = new HashTable()
for (let i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i])
}

hTable.showDistro()

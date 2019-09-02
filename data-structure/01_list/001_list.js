function List () {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.find = find
  this.append = append
  this.length = length
  this.remove = remove
  this.toString = toString
  this.clear = clear
  this.insert = insert
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.hasNext = hasNext
  this.hasPrev = hasPrev
  this.currPos = currPos
  this.moveTo = moveTo
  this.getElement = getElement
  this.contains = contains

  // 给列表添加元素
  function append (element) {
    this.dataStore[this.listSize++] = element
  }

  // remove：需要先找到那个元素
  function find (element) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i
      }
    }
    return -1
  }

  function remove (element) {
    var foundAt = this.find(element)
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1)
      this.listSize--
      return true
    }
    return false
  }

  function length () {
    return this.listSize
  }

  function toString () {
    return this.dataStore
  }

  function insert (element, after) {
    var insertPos = this.find(after)
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element)
      this.listSize++
      return true
    }
    return false
  }

  function clear () {
    delete this.dataStore
    this.dataStore.length = 0
    this.listSize = this.pos = 0
  }

  function contains (element) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true
      }
    }
    return false
  }

  function front () {
    this.pos = 0
  }

  function end () {
    this.pos = this.listSize - 1
  }

  function prev () {
    --this.pos
  }

  function next () {
    if (this.pos < this.listSize) {
      ++ this.pos
    }
  }

  function currPos () {
    return this.pos
  }

  function moveTo (position) {
    this.pos = position
  }

  function getElement () {
    return this.dataStore[this.pos]
  }

  function hasNext () {
    return this.pos < this.listSize
  }

  function hasPrev () {
    return this.pos >= 0
  }
}

// var names = new List()
// names.append(1)
// names.append(2)
// names.append(3)
// names.append(4)
// names.append(5)
// names.append(6)
//
// console.info(names.toString())

var names = new List()
names.append('Clayton')
names.append('Raymond')
names.append('Cynthia')
names.append('Jennifer')
names.append('Bryan')
names.append('Danny')

names.front()
console.info(names.getElement())
names.next()
console.info(names.getElement())

names.next()
names.next()
names.prev()
console.info(names.getElement())
console.info('--------------------------------')
for (names.front(); names.hasNext(); names.next()) {
  console.info(names.getElement())
}

console.info('--------------------------------')
for (names.end(); names.hasPrev(); names.prev()) {
  console.info(names.getElement())
}


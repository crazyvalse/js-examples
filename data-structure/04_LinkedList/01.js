function Node (element) {
  this.element = element
  this.next = null
}

function LinkedList () {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  // this.remove = remove
  this.display = display
}

function find (item) {
  let currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
}

function insert (newElement, item) {
  let newNode = new Node(newElement)
  let current = this.find(item)
  newNode.next = current.next
  current.next = newNode
}

function display () {
  let currNode = this.head
  while (!(currNode.next === null)) {
    console.info(currNode.next.element)
    currNode = currNode.next
  }
}

// let cities = new LinkedList()
// cities.insert('Conway', 'head')
// cities.insert('Russellville', 'Conway')
// cities.insert('Alma', 'Russellville')
// cities.display()

function findPrevious (item) {
  let currNode = this.head
  while (!(currNode.next == null) && (currNode.next.element !== item)) {
    currNode = currNode.next
  }
}

function remove (item) {
  var preNode = this.findPrevious(item)
  if (!(preNode.next === null)) {
    preNode.next = preNode.next.next
  }
}

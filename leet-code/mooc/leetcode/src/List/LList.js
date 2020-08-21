function Node (element) {
  this.element = element
  this.next = null
}

function LList () {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  this.remove = remove
  this.display = display
}

function find (item) {
  let currNode = this.head
  while (currNode !== item) {
    currNode = currNode.next
  }
  return currNode
}

function insert (newElement, item) {
  let newNode = new Node(newElement)
  let current = this.find(item)

}

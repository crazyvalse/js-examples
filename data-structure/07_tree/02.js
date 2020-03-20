function Node (data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function show () {
  return this.data
}

function BST () {
  this.root = null
  this.insert = insert
  this.inOrder = inOrder
  this.preOrder = preOrder
  this.postOrder = postOrder

  this.getMin = getMin
  this.getMax = getMax
  this.find = find

  this.remove = remove
}

function insert (data) {
  let n = new Node(data, null, null)
  if (this.root === null) {
    this.root = n
  } else {
    let current = this.root
    let parent
    while (true) {
      parent = current
      // 左小右大
      if (data < current.data) {
        current = current.left
        if (current === null) {
          parent.left = n
          break
        }
      } else {
        current = current.right
        if (current === null) {
          parent.right = n
          break
        }
      }
    }
  }
}

function inOrder (node) {
  if (!(node === null)) {
    inOrder(node.left)
    console.info(node.show() + ' ')
    inOrder(node.right)
  }
}

function preOrder (node) {
  if (!(node === null)) {
    console.info(node.show() + ' ')
    preOrder(node.left)
    preOrder(node.right)
  }
}

function postOrder (node) {
  if (!(node === null)) {
    postOrder(node.left)
    postOrder(node.right)
    console.info(node.show() + ' ')
  }
}

let nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.info(`Inorder traversal: ${inOrder(nums.root)}`)
console.info(`preOrder traversal: ${preOrder(nums.root)}`)
console.info(`postOrder traversal: ${postOrder(nums.root)}`)

function getMin () {
  let current = this.root
  while (!(current.left === null)) {
    current = current.left
  }
  return current.data
}

function getMax () {
  let current = this.root
  while (!(current.right === null)) {
    current = current.right
  }
  return current.data
}

function find (data) {
  let current = this.root
  while (current !== null) {
    if (current.data === data) {
      return current
    } else if (data < current.data) {
      current = current.left
    } else {
      current = current.right
    }
  }
  return null
}

function remove (data) {
  root = removeNode(this.root, data)
}

function removeNode (node, data) {
  if (node === null) {
    return null
  }
  if (data === node.data) {
    // 没有子节点的节点
    if (node.left === null && node.right === null) {
      return null
    }
    // 没有左子节点的节点
    if (node.left === null) {
      return node.right
    }
    // 没有右子节点的节点
    if (node.right === null) {
      return node.left
    }

    let tempNode = getSmallest(node.right)
  }
}

console.info(nums.getMin())
console.info(nums.getMax())
console.info(nums.find(45))

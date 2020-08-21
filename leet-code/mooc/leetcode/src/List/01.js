class Node {
  constructor (element, next) {
    this.element = element
    this.next = next
  }
}

class List {
  constructor () {
    this.head = null
    this.length = 0
  }

  getList () {
    return this.head
  }

  /**
   * 1. 从头开始遍历每一个6元素是否相等
   * @param element
   * @returns {boolean}
   */
  search (element) {
    let p = this.head
    while (p) {
      if (p.element === element) return true
      p = p.next
    }
    return false
  }

  /**
   * 在队尾插入element
   * 1. 遍历找到队尾，给next赋值
   * 2. 如果是开头 head === null ，就给head赋值
   *
   * 3. 给length ++
   * @param element
   */
  append (element) {
    const node = new Node(element)
    if (!this.head) {
      this.head = node
    } else {
      let p = this.head
      while (p.next) {
        p = p.next
      }
      p.next = node
    }
    this.length++
  }

  /**
   * 1. 遍历到 position: position >= 0 && position < this.length
   * 2. node.next = curr.next
   * 3. curr.next = node
   * @param position
   * @param element
   * @returns {null}
   */
  insert (position, element) {
    let node = new Node(element)
    if (position >= 0 && position <= this.length) {
      let prev = this.head
      let curr = this.head
      let index = 0

      if (position === 0) {
        node.next = this.head
        this.head = node
      } else {
        while (index < position) {
          prev = curr
          curr = curr.next
          index++
        }
        prev.next = node
        node.next = curr
      }
      this.length++
    }
    return null
  }

  remove (element) {
    let p = this.head
    let prev = this.head
    if (!this.head) return
    while (p) {
      if (p.element === element) {
        p = p.next
        prev.next = p
      } else {
        prev = p
        p = p.next
      }
    }
  }

  isEmpty () {
    return this.length <= 0
  }

  size () {
    return this.length
  }
}

const list = new List()
for (let i = 0; i < 5; i += 1) {
  list.append(i)
}
console.info(list.getList())
console.info(list.isEmpty())
console.info(list.size())

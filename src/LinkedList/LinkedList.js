import LinkedListNode from "./LinkedListNode.js"

// Singly Linked List
export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // O(1)
  append(value) {
    const newNode = new LinkedListNode(value)

    if (this.tail) this.tail.next = newNode
    this.tail = newNode
    this.length++
    if (!this.head) this.head = newNode
  }

  // O(1)
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    this.length++
  }

  // O(n)
  toArray() {
    const result = []

    let currentNode = this.head

    while (currentNode) {
      result.push(currentNode)
      currentNode = currentNode.next
    }

    return result
  }

  // O(n)
  indexOf(value) {
    let currentNode = this.head
    let index = 0

    while (currentNode) {
      if (currentNode.value === value) return index
      index++
      currentNode = currentNode.next
    }

    return -1
  }

  atIndex(index) {
    if (index < 0 || index > this.length) return null
    let currentNode = this.head

    for (let i = 0; i < index; i++) currentNode = currentNode.next

    return currentNode
  }

  // O(n)
  deleteAll(value) {
    if (!this.length) return

    while (this.head && this.head.value === value) {
      this.head = this.head.next
      this.length--
    }

    let currentNode = this.head

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next
        this.length--
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode
      this.length--
    }
  }

  // O(n)
  delete(value) {
    if (!this.length) return
    let currentNode = this.head

    if (this.head.value === value) {
      this.head = this.head.next
      this.length--
      return
    }

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next
        this.length--
        return
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode
      this.length--
    }
  }

  insertAfter(value, valueAfter) {
    if (!this.length) return null
    if (~this.indexOf(valueAfter)) return null
    let currentNode = this.head

    while (currentNode.next) {
      if (currentNode.value === valueAfter) {
        currentNode.next = new LinkedListNode(value, currentNode.next.next)
        return
      }
      currentNode = currentNode.next
    }
    // if it's in the every end
    if (currentNode.value === valueAfter) {
      currentNode.next = new LinkedListNode(value, null)
    }
  }

  reverse() {
    let current = this.head
    let prev = null

    while (current) {
      const nextNode = current.next
      current.next = prev
      prev = current
      current = nextNode
    }
    return prev
  }
}

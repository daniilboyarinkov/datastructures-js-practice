import BinarySearchNode from "./BinarySearchNode.js"

export default class BinarySearchTree {
  constructor(root = null) {
    this.root = root
  }

  /**
   * Adds a value to BST
   * @param {any} value to insert
   * @returns the same instance of BST
   */
  insert(value) {
    const newNode = new BinarySearchNode(value)

    if (this.root === null) {
      this.root = newNode
      return this
    }

    this.#insertNode(this.root, newNode)

    return this
  }

  #insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) node.left = newNode
      else this.#insertNode(node.left, newNode)
    } else {
      if (!node.right) node.right = newNode
      else this.#insertNode(node.right, newNode)
    }
  }

  /**
   * predicate that checks whether element is in BST
   * @param {any} value to check in BST
   * @returns boolean
   */
  has(value) {
    if (!this.root) return false

    let current = this.root

    while (current) {
      if (value === current.value) return true
      else if (value < current.value) current = current.left
      else current = current.right
    }
    return false
  }
  remove(value) {
    this.root = this.#removeNode(this.root, value)
  }

  #removeNode(current, value) {
    if (!current) return current

    // if we found needed node
    if (value === current.value) {
      if (!current.left && !current.right) return null
      else if (!current.left) return current.right
      else if (!current.right) return current.left
      else {
        let tempNode = current.right
        while (tempNode.left) tempNode = tempNode.left
        current.value = tempNode.value
        current.right = this.#removeNode(current.right, tempNode.value)
        return current
      }
    } else if (value < current.value) {
      current.left = this.#removeNode(current.left, value)
      return current
    } else {
      current.right = this.#removeNode(current.right, value)
      return current
    }
  }

  BFSTraverse() {
    let current = this.root
    const data = []
    const q = []

    q.push(current)

    while (q.length) {
      current = q.shift()
      data.push(current.value)
      if (current.left) q.push(current.left)
      if (current.right) q.push(current.right)
    }
    return data
  }

  InOrderDFSTraverse() {
    const data = []

    const InOrderTraverse = (node) => {
      if (node.left) InOrderTraverse(node.left)
      data.push(node.value)
      if (node.right) InOrderTraverse(node.right)
    }

    InOrderTraverse(this.root)
    return data
  }

  PreOrderDFSTraverse() {
    const data = []

    const InOrderTraverse = (node) => {
      data.push(node.value)
      if (node.left) InOrderTraverse(node.left)
      if (node.right) InOrderTraverse(node.right)
    }

    InOrderTraverse(this.root)
    return data
  }

  PostOrderDFSTraverse() {
    const data = []

    const InOrderTraverse = (node) => {
      if (node.left) InOrderTraverse(node.left)
      if (node.right) InOrderTraverse(node.right)
      data.push(node.value)
    }

    InOrderTraverse(this.root)
    return data
  }
}

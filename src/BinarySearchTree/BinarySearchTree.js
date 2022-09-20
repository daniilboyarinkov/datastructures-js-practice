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

    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root

      while (current) {
        if (current.value === value) return this
        else if (value < current.value) {
          if (!current.left) {
            current.left = newNode
            return this
          }
          current = current.left
        } else {
          if (!current.right) {
            current.right = newNode
            return this
          }
          current = current.right
        }
      }
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
}

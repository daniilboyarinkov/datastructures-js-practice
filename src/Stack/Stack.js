export default class Stack {
  #data
  #size

  /**
   *
   * @param {any[]} data
   */
  constructor(data = []) {
    this.#data = data
    this.#size = data.length
  }

  get size() {
    return this.#size
  }

  /**
   *
   * @param {any} element
   * @returns instance of stack
   */
  push(element) {
    this.#data.push(element)
    this.#size++
    return this
  }

  /**
   *
   * @returns instance of stack
   */
  pop() {
    if (!this.isEmpty()) {
      this.#data.pop()
      this.#size--
    }
    return this
  }

  /**
   * view head element
   * @returns head element
   */
  peek() {
    return this.#data[this.#size - 1]
  }

  /**
   *
   * @returns true/false
   */
  isEmpty() {
    return this.#size === 0
  }

  /**
   *
   */
  clear() {
    // hack with array length to clear an array
    this.#data.length = 0
    this.#size = 0
    return void 0
  }
}

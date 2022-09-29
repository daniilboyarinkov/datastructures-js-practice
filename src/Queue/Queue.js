export default class Queue {
  #data
  #size

  constructor(data = []) {
    this.#data = data
    this.#size = data.length
  }

  get size() {
    return this.#size
  }

  enqueue(element) {
    this.#data.push(element)
    this.#size++
    return this
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.#data.shift()
      this.#size--
    }
    return this
  }

  peek() {
    return this.#data[0]
  }

  peekTail() {
    return this.#data[this.#size - 1]
  }

  isEmpty() {
    return this.#size === 0
  }
}

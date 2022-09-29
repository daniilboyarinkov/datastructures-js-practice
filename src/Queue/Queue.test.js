import Queue from "./Queue.js"

let q = new Queue()

beforeEach(() => {
  q = new Queue()
  q.enqueue(1).enqueue(2).enqueue(3).enqueue(4)
})

describe("#peek", () => {
  test("head element", () => {
    expect(q.peek()).toBe(1)
  })
})

describe("#peekTail", () => {
  test("tail element", () => {
    expect(q.peekTail()).toBe(4)
  })
})

describe("#enqueue", () => {
  test("enqueue number", () => {
    const expected = 5
    q.enqueue(expected)
    expect(q.peekTail()).toBe(expected)
  })
  test("enqueue string", () => {
    const expected = "5"
    q.enqueue(expected)
    expect(q.peekTail()).toBe(expected)
  })
  test("enqueue array", () => {
    const expected = [5, 4, 3]
    q.enqueue(expected)
    expect(q.peekTail()).toEqual(expected)
  })
  test("enqueue object", () => {
    const expected = { test: true, true: test }
    q.enqueue(expected)
    expect(q.peekTail()).toEqual(expected)
  })
  test("enqueue null", () => {
    const expected = null
    q.enqueue(expected)
    expect(q.peekTail()).toBeNull()
  })
  test("enqueue another Queue", () => {
    const expected = new Queue(["test", "test"])
    q.enqueue(expected)
    expect(q.peekTail()).toEqual(expected)
  })
})

describe("#isEmpty", () => {
  test("if there are elements", () => {
    expect(q.isEmpty()).toBeFalsy()
  })
  test("if there are no elements", () => {
    q = new Queue()
    expect(q.isEmpty()).toBeTruthy()
  })
})

describe("#dequeue", () => {
  test("regular dequeue", () => {
    expect(q.peek()).toBe(1)
    q.dequeue()
    expect(q.peek()).toBe(2)
  })
  test("dequeue if there are no elements", () => {
    while (!q.isEmpty()) q.dequeue()
    q.dequeue()
    expect(q.peek()).toBeFalsy()
    expect(q.peekTail()).toBeFalsy()
    expect(q.size).toBe(0)
  })
})

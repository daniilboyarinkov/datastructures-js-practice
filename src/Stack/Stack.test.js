import Stack from "./Stack"

let stack = new Stack()

beforeEach(() => {
  stack = new Stack()
  stack.push(1).push(2).push(3)
})

describe("#peek", () => {
  test("head element", () => {
    expect(stack.peek()).toBe(3)
  })
})

describe("#push", () => {
  test("adding number", () => {
    stack.push(4)
    expect(stack.peek()).toBe(4)
  })
  test("adding string", () => {
    const testValue = "123"
    stack.push(testValue)
    expect(stack.peek()).toBe(testValue)

    const testValue1 = ""
    stack.push(testValue1)
    expect(stack.peek()).toBe(testValue1)
  })
  test("adding array", () => {
    const testValue = new Array(2)
    stack.push(testValue)
    expect(stack.peek()).toEqual(testValue)
  })
  test("adding object", () => {
    const testValue = { test: true, true: "test" }
    stack.push(testValue)
    expect(stack.peek()).toEqual(testValue)
  })
  test("adding another stack", () => {
    const testValue = new Stack(["test1", "test2", "test3"])
    stack.push(testValue)
    expect(stack.peek()).toEqual(testValue)
  })
  test("adding null", () => {
    const testValue = null
    stack.push(testValue)
    expect(stack.peek()).toBeNull()
  })
})

describe("#isEmpty", () => {
  test("reInitialization", () => {
    stack = new Stack()
    expect(stack.isEmpty()).toBeTruthy()
  })
})

describe("#pop", () => {
  test("regular pop", () => {
    stack.pop()
    expect(stack.size).toBe(2)
    expect(stack.peek()).toBe(2)
  })
  test("pop if that is already empty", () => {
    while (!stack.isEmpty()) stack.pop()

    stack.pop()
    expect(stack.size).toBe(0)
    expect(stack.peek()).toBeFalsy()
  })
})

describe("#clear", () => {
  test("size should be 0 and no peek", () => {
    stack.clear()

    expect(stack.size).toBe(0)
    expect(stack.isEmpty()).toBeTruthy()
    expect(stack.peek()).toBeFalsy()
  })
})

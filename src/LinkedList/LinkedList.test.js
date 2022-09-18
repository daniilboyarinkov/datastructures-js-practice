import LinkedList from "./LinkedList.js"

describe("#append", () => {
  test("Adds the element at the end of the linked list", () => {
    const linkedList = new LinkedList()
    linkedList.append(1)
    const tail1 = linkedList.tail.value
    linkedList.append(2)
    const tail2 = linkedList.tail.value
    linkedList.append(3)

    expect(linkedList.head.value).toBe(1)
    expect(linkedList.head.value).toBe(tail1)
    expect(linkedList.head.next.value).toBe(tail2)
    expect(linkedList.tail.value).toBe(3)
    expect(linkedList.length).toBe(3)
  })
})

describe("#prepend", () => {
  test("Adds the element at the beginning of the linked list", () => {
    const linkedList = new LinkedList()
    linkedList.prepend(1)
    const oldHead = linkedList.head.value
    linkedList.prepend(2)

    expect(linkedList.head.value).toBe(2)
    expect(linkedList.head.next.value).toBe(oldHead)
  })
})

describe("#toArray", () => {
  test("Returns every part of linked list in the array", () => {
    const linkedList = new LinkedList()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(4)

    const linkedListArray = linkedList.toArray()

    expect(linkedListArray[0]).toBe(linkedList.head)
  })
})

describe("#indexOf", () => {
  describe("Tests of values that are NOT in the linked list", () => {
    test("Should return -1", () => {
      const linkedList = new LinkedList()
      expect(linkedList.indexOf(1)).toBe(-1)
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      linkedList.append(4)
      expect(linkedList.indexOf("1")).toBe(-1)
      expect(linkedList.indexOf(5)).toBe(-1)
    })
  })
  describe("Tests of values that ARE in the linked list", () => {
    test("Should return correct index", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      linkedList.append(4)
      expect(linkedList.indexOf(1)).toBe(0)
      expect(linkedList.indexOf(2)).toBe(1)
      expect(linkedList.indexOf(3)).toBe(2)
      expect(linkedList.indexOf(4)).toBe(3)
    })
  })
})

describe("#atIndex", () => {
  describe("If an index is incorrect", () => {
    test("Index is lower than 0", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(2)
      expect(linkedList.atIndex(-1)).toBeNull()
      expect(linkedList.atIndex(-100)).toBeNull()
    })
    test("Index is greater than list length", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(2)
      expect(linkedList.atIndex(3)).toBeNull()
      expect(linkedList.atIndex(100)).toBeNull()
    })
  })
  describe("Index is in the middle", () => {
    const linkedList = new LinkedList()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(4)
    expect(linkedList.atIndex(1).value).toBe(2)
    expect(linkedList.atIndex(3).value).toBe(4)
  })
})

describe("#deleteAll", () => {
  describe("If there are no instances", () => {
    test("Linked list should not be changed", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      linkedList.append(4)

      linkedList.deleteAll(0)
      expect(linkedList).toBe(linkedList)

      linkedList.deleteAll("1")
      expect(linkedList).toBe(linkedList)

      linkedList.deleteAll("2")
      expect(linkedList).toBe(linkedList)
    })
  })
  describe("If there are one or more instances", () => {
    test("Should reduce all instances", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(1)
      linkedList.append(1)
      linkedList.append(2)
      linkedList.deleteAll(1)
      const newLinkedList = new LinkedList()
      newLinkedList.append(2)
      expect(linkedList).toEqual(newLinkedList)
    })
  })
})

describe("#delete", () => {
  describe("Delete the item that is not in the list", () => {
    test("should be the same linked list", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(2)
      const oldLinkedList = linkedList
      linkedList.deleteAll(3)
      expect(linkedList).toEqual(oldLinkedList)
    })
  })
  describe("Delete the item that IS in the list", () => {
    test("should be the linked list without that item (only first one)", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(1)
      linkedList.append(2)
      linkedList.delete(1)
      const newLinkedList = new LinkedList()
      newLinkedList.append(1)
      newLinkedList.append(2)
      expect(linkedList).toEqual(newLinkedList)
    })
  })
})

describe("#insertAfter", () => {
  describe("after the item that is not in tke linked list", () => {
    test("should return null", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      const oldLinkedList = linkedList
      linkedList.insertAfter(4, 4)

      expect(linkedList).toEqual(oldLinkedList)
    })
  })
  describe("after the item that IS in tke linked list", () => {
    test("should insert after the existing item", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      linkedList.insertAfter(4, 3)

      const newLinkedList = new LinkedList()
      newLinkedList.append(1)
      newLinkedList.append(2)
      newLinkedList.append(3)
      newLinkedList.append(4)

      expect(linkedList).toEqual(newLinkedList)
    })

    test("should insert after the last item", () => {
      const linkedList = new LinkedList()
      linkedList.append(1)
      linkedList.append(2)
      linkedList.append(3)
      linkedList.insertAfter(4, 3)

      const newLinkedList = new LinkedList()
      newLinkedList.append(1)
      newLinkedList.append(2)
      newLinkedList.append(3)
      newLinkedList.append(4)

      expect(linkedList).toEqual(newLinkedList)
    })
  })
})

import BinarySearchTree from "./BinarySearchTree"

let BST = new BinarySearchTree()

// BST: 0 <- 1 -> 2 -> 3
function initBST() {
  BST.insert(1)
  BST.insert(0)
  BST.insert(2)
  BST.insert(3)
}

beforeEach(() => {
  initBST()
})

describe("#insert", () => {
  test("Balanced adds new nodes", () => {
    expect(BST.root.value).toBe(1)
    expect(BST.root.left.value).toBe(0)
    expect(BST.root.right.value).toBe(2)
    expect(BST.root.right.right.value).toBe(3)
  })
  test("if there is no root yet (new tree)", () => {
    BST = new BinarySearchTree()
    BST.insert("root")
    expect(BST.root.value).toBe("root")
  })
})

describe("#has", () => {
  test("value not in BST", () => {
    expect(BST.has(4)).toBeFalsy()
    expect(BST.has(-1)).toBeFalsy()
    expect(BST.has("null")).toBeFalsy()
  })
  test("value IS BST root", () => {
    expect(BST.has(1)).toBeTruthy()
  })
  test("value IS in BST", () => {
    expect(BST.has(0)).toBeTruthy()
    expect(BST.has(1)).toBeTruthy()
    expect(BST.has(2)).toBeTruthy()
    expect(BST.has(3)).toBeTruthy()
  })
  test("No tree", () => {
    BST = new BinarySearchTree()
    expect(BST.has("null")).toBeFalsy()
  })
})

describe("#remove", () => {
  test("remove node from BST tests", () => {
    BST = new BinarySearchTree()
    BST.insert(3)
    BST.insert(5)
    BST.insert(4)
    BST.insert(0)
    BST.insert(2)
    BST.insert(1)
    BST.insert(-2)
    BST.insert(-1)

    BST.remove(4)
    expect(BST.root.right.left).toBeNull()
    BST.remove(0)
    expect(BST.root.left.value).toBe(1)
    BST.remove(-2)
    expect(BST.root.left.left.value).toBe(-1)
  })
  test("if BST is empty", () => {
    BST = new BinarySearchTree()
    BST.remove("null")
    expect(BST.root).toBeNull()
  })
  test("if no right", () => {
    BST = new BinarySearchTree()
    BST.insert(3)
    BST.insert(2)
    BST.insert(1)

    BST.remove(2)
    expect(BST.root.left.value).toBe(1)
  })
})

describe("#BFSTraverse", () => {
  test("test", () => {
    BST = new BinarySearchTree()
    BST.insert(3).insert(1).insert(2).insert(7).insert(4).insert(10)
    const result = [3, 1, 7, 2, 4, 10]
    expect(BST.BFSTraverse()).toEqual(result)
  })
})

describe("#DFSTraverse", () => {
  test("InOrder", () => {
    BST = new BinarySearchTree()
    BST.insert(3).insert(1).insert(2).insert(7).insert(4).insert(10)
    const result = [1, 2, 3, 4, 7, 10]
    expect(BST.InOrderDFSTraverse()).toEqual(result)
  })
  test("PreOrder", () => {
    BST = new BinarySearchTree()
    BST.insert(3).insert(1).insert(2).insert(7).insert(4).insert(10)
    const result = [3, 1, 2, 7, 4, 10]
    expect(BST.PreOrderDFSTraverse()).toEqual(result)
  })
  test("PostOrder", () => {
    BST = new BinarySearchTree()
    BST.insert(3).insert(1).insert(2).insert(7).insert(4).insert(10)
    const result = [2, 1, 4, 10, 7, 3]
    expect(BST.PostOrderDFSTraverse()).toEqual(result)
  })
})

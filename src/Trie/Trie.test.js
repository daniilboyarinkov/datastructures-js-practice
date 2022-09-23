import Trie from "./Trie.js"

let trie = new Trie()

// function initTrie() {}

// beforeEach(() => {
//   initTrie()
// })

describe("#insert", () => {
  describe("regular insert", () => {
    test("everything should be nice :)", () => {
      trie.insert("test")
      expect(trie.root.children.get("t").value).toBe("t")
      expect(trie.root.children.get("t").children.get("e").value).toBe("e")
    })
  })
  describe("insert a word that already exists", () => {
    test("should not mutate original trie", () => {
      trie = new Trie()
      trie.insert("test")
      trie.insert("test")
      expect(trie.root.children.size).toBe(1)
    })
  })
})

describe("#search", () => {
  describe("a word that is surely in trie", () => {
    test("-> true", () => {
      trie.insert("test")
      trie.insert("anotherTest")
      expect(trie.search("test")).toBeTruthy()
      expect(trie.search("anotherTest")).toBeTruthy()
    })
  })
  describe("a word that is surely NOT in trie", () => {
    test("-> false", () => {
      expect(trie.search("someincrediblyfalseword")).toBeFalsy()
    })
  })
})

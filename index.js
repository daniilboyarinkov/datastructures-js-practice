import BFS from "./src/BinarySearchTree/BinarySearchTree.js"

const tree = new BFS()

tree.insert(3).insert(1).insert(2).insert(7).insert(4).insert(10)

console.log(tree.InOrderDFSTraverse())
console.log(tree.PreOrderDFSTraverse())
console.log(tree.PostOrderDFSTraverse())

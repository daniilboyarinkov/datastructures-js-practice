import { WOrGraph } from "./src/Graph/Graph.js"

const graph = new WOrGraph()

graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")
graph.addVertex("d")
graph.addVertex("e")
graph.addVertex("f")
graph.addVertex("g")

graph.addEdge("a", "b", 2)
graph.addEdge("a", "c", 1)
graph.addEdge("c", "d", 5)
graph.addEdge("d", "f", 2)
graph.addEdge("b", "f", 7)
graph.addEdge("f", "g", 1)
graph.addEdge("c", "e", 2)
graph.addEdge("e", "f", 1)

// console.log(graph.adjList)
// graph.dfs("a", (v) => console.log(v))
// graph.bfs("a", (v) => console.log(v))
console.log(graph.dijkstra("a"))

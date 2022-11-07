export default class Graph {
  constructor() {
    this.adjList = {}
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1] || !this.adjList[vertex2])
      throw Error("No such vertices")

    if (!this.adjList[vertex1].includes(vertex2))
      this.adjList[vertex1].push(vertex2)
    if (!this.adjList[vertex2].includes(vertex1))
      this.adjList[vertex2].push(vertex1)
  }
}

export class WOrGraph {
  constructor() {
    this.adjList = {}
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = {}
  }

  addEdge(vertex1, vertex2, distance) {
    if (!this.adjList[vertex1] || !this.adjList[vertex2])
      throw Error("No such vertices")

    if (!this.adjList[vertex1][vertex2])
      this.adjList[vertex1][vertex2] = distance
  }

  dfs(startNode, cb) {
    const visited = {}
    const stack = [startNode]
    visited[startNode] = true

    while (stack.length > 0) {
      const currentNode = stack.pop()
      cb(currentNode)
      const neighbors = Object.keys(this.adjList[currentNode])
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      }
    }
  }

  bfs(startNode, cb) {
    const visited = {}
    const q = [startNode]
    visited[startNode] = true

    while (q.length > 0) {
      const currentNode = q.shift()
      cb(currentNode)
      const neighbors = Object.keys(this.adjList[currentNode])
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          q.push(neighbor)
        }
      }
    }
  }

  dijkstra(startNode) {
    const visited = {}
    const distances = {}
    const previous = {}

    const vertices = Object.keys(this.adjList)

    for (const vertex of vertices) {
      distances[vertex] = Infinity
      previous[vertex] = null
    }
    distances[startNode] = 0

    let activeNode = findNearestNode()

    function findNearestNode() {
      let minDistance = Infinity
      let nearestVertex = null

      Object.entries(distances).forEach(([vertex, distance]) => {
        if (!visited[vertex] && distance < minDistance) {
          minDistance = distance
          nearestVertex = vertex
        }
      })

      return nearestVertex
    }

    function handleNode(node, adjList) {
      visited[node] = true
      const nodeDistance = distances[node]
      const neighbors = adjList[node]
      for (const neighbor of Object.keys(neighbors)) {
        const calculatedDistance = nodeDistance + neighbors[neighbor]
        if (calculatedDistance < distances[neighbor]) {
          distances[neighbor] = calculatedDistance
          previous[neighbor] = node
        }
      }
    }

    while (activeNode) {
      handleNode(activeNode, this.adjList)
      activeNode = findNearestNode()
    }

    const targetNode = vertices.slice(-1)[0]
    const humanReadableFormat = this.restorePath(
      previous,
      startNode,
      targetNode
    )

    return {
      distances,
      previous,
      humanReadableFormat,
    }
  }

  restorePath(result, startNode, targetNode) {
    if (!result[targetNode]) throw "Не существует такого пути!"

    const path = []
    let currentNode = targetNode
    while (currentNode !== startNode) {
      path.unshift(currentNode)
      currentNode = result[currentNode]
    }
    path.unshift(currentNode)

    return path.join(" -> ")
  }
}

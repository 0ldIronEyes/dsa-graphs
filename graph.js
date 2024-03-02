class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex); 
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vert of vertexArray)
    {
      this.nodes.add(vert);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let n of this.nodes)
    {
      if (n.adjacent.has(vertex))
      {
        n.adj.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let searched = new Set();
    const result = [];

    function search(vertex)
    {
      if (!vertex) return null;
      searched.add(vertex);
      result.push(vertex.value);

      for (let v of vertex.adjacent)
      {
        if (!searched.has(v)) 
        {
          return search(vertex);
        }
      }
    }

    search(start);
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
      const queue = [start];
      const result = [];
      const searched= new Set();
      searched.add(start);

      let currentVertex;
      while (queue.length > 0 )
      {
        currentVertex = queue.shift();
        result.shift(currentVertex);

        for (let vert of currentVertex.adjacent)
        {
          if (!searched.has(vert))
          {
            visited.add(vert);
            queue.push(vert);
          }
        }
      }
    return result;
  }
  
}

module.exports = {Graph, Node}
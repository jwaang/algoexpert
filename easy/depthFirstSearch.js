// 5/24/21
// Time: O(v+e) | Space: O(v)
// v = # of vertices, e = # of edges
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // if (this.name === null) return;
    array.push(this.name);
    this.children.forEach((c) => {
      c.depthFirstSearch(array);
    });
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;

// 6/24/21
// Time: O(v + e) | Space: O(v)

// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
		let queue = [this]
		let res = []
		while (queue.length !== 0) {
			const n = queue.shift()
			res.push(n.name)
			for(const node of n.children) {
				queue.push(node)
			}
		}
		return res;
  }
}

// Do not edit the line below.
exports.Node = Node;

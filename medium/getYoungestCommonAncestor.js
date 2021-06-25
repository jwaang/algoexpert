// 6/24/21
// Time: O(n) | Space: O(n)

// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	let queue = [descendantOne, descendantTwo]
	let s = new Set(queue);
	while (true) {
		let node = queue.shift()
		if (node.ancestor === null) continue;
		queue.push(node.ancestor)
		if (!s.has(node.ancestor)) {
			s.add(node.ancestor)
		} else {
			return node.ancestor
		}
	}
}

// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;

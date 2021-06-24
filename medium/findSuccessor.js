// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// 6/22/21
// Time: O(n) | Space: O(n)
function findSuccessor(tree, node) {
	let array = [];
	const inOrderTrav = findSuccessorHelper(tree, array);
	for (let i = 0; i < inOrderTrav.length; ++i) {		
		const currentNode = inOrderTrav[i];
		if (i === inOrderTrav.length - 1) return null;
		if (currentNode === node) {
			return inOrderTrav[i + 1]
		}
	}
}

function findSuccessorHelper(tree, array) {
	if (tree === null) return array;
	findSuccessorHelper(tree.left, array)
	array.push(tree)
	findSuccessorHelper(tree.right, array)
	return array;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;

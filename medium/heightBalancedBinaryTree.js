// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
	constructor(height, isBalanced) {
		this.height = height;
		this.isBalanced = isBalanced;
	}
}

// 6/22/20
// Time: O(n) | Space: O(n)

function heightBalancedBinaryTree(tree) {	
	return findMaxHeight(tree).isBalanced;
}

function findMaxHeight(tree){
	if (tree === null) {
		return new TreeInfo(-1, true)
	}
	
	const leftSubTree = findMaxHeight(tree.left);
	const rightSubTree = findMaxHeight(tree.right);
	
	const isBalanced = leftSubTree.isBalanced && rightSubTree.isBalanced && Math.abs(leftSubTree.height - rightSubTree.height) <= 1
	const currentHeight = 1 + Math.max(leftSubTree.height, rightSubTree.height)
	
	return new TreeInfo(currentHeight, isBalanced)
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
	constructor(diameter, depth) {
		this.diameter = diameter;
		this.depth = depth;
	}
}

// 6/22/21
// Time: O(n) | Space: O(h)
function binaryTreeDiameter(tree) {
	return binaryTreeDiameterHelper(tree).diameter
}

function binaryTreeDiameterHelper(tree) {
	if (tree === null) {
		return new TreeInfo(0,0)
	}
	const leftSubTree = binaryTreeDiameterHelper(tree.left);
	const rightSubTree = binaryTreeDiameterHelper(tree.right);
	
	const longestPathThroughRoot = leftSubTree.depth + rightSubTree.depth
	const longestDiameter = Math.max(leftSubTree.diameter, rightSubTree.diameter)
	const currDiameter = Math.max(longestPathThroughRoot, longestDiameter)
	const currentHeight = 1 + Math.max(leftSubTree.depth, rightSubTree.depth)
	
	return new TreeInfo(currDiameter, currentHeight)
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;

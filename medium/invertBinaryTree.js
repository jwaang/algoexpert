// 6/22/20
// Time: O(n) | Space: O(n)
// looked at solution

function invertBinaryTree(tree) {
	let queue = [tree]
	while (queue.length !== 0) {
		const first = queue.shift()
		if (first === null) continue
		swap(first);
		queue.push(first.left)
		queue.push(first.right)
	}
	return tree;
}

// Time: O(n) | Space: O(logn)
function invertBinaryTree(tree) {
	if (tree === null) return;
	swap(tree);
	invertBinaryTree(tree.left)
	invertBinaryTree(tree.right)
	return tree;
}

function swap(tree) {
	const val = tree.right;
	tree.right = tree.left;
	tree.left = val;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
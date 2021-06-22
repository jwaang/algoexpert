// 6/21/20
// Time: O(h + k) | Space: O(h)
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  let array = [];
  findKthLargestValueInBstHelper(tree, k, array);
  return array[k - 1];
}

function findKthLargestValueInBstHelper(tree, k, array) {
  if (tree.right !== null) findKthLargestValueInBstHelper(tree.right, k, array);
  array.push(tree.value);
  if (tree.left !== null) findKthLargestValueInBstHelper(tree.left, k, array);
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;

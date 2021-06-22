// 6/21/20
// Time: O(n) | Space: O(n)
function inOrderTraverse(tree) {
  let arr = [];
  inOrderTraverseHelper(tree, arr);
  return arr;
}

function inOrderTraverseHelper(tree, array) {
  if (tree.left !== null) inOrderTraverseHelper(tree.left, array);
  array.push(tree.value);
  if (tree.right !== null) inOrderTraverseHelper(tree.right, array);
}

function preOrderTraverse(tree) {
  let arr = [];
  preOrderTraverseHelper(tree, arr);
  return arr;
}

function preOrderTraverseHelper(tree, array) {
  array.push(tree.value);
  if (tree.left !== null) preOrderTraverseHelper(tree.left, array);
  if (tree.right !== null) preOrderTraverseHelper(tree.right, array);
}

function postOrderTraverse(tree) {
  let arr = [];
  postOrderTraverseHelper(tree, arr);
  return arr;
}

function postOrderTraverseHelper(tree, array) {
  if (tree.left !== null) postOrderTraverseHelper(tree.left, array);
  if (tree.right !== null) postOrderTraverseHelper(tree.right, array);
  array.push(tree.value);
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;

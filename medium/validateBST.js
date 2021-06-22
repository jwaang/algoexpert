// 6/21/20
// Time: O(n) | Space: O(d)
// Looked at solution
function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  return validateBstHelper(tree.left, minValue, tree.value) && validateBstHelper(tree.right, tree.value, maxValue);
}

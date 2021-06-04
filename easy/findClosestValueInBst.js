// 5/17/21
// Time: O(logn) | Space: O(1)
function findClosestValueInBstHelper(tree, target, currentClosest) {
  if (tree === null) return currentClosest;
  if (Math.abs(tree.value - target) < Math.abs(currentClosest - target)) {
    currentClosest = tree.value;
  }
  // Tried setting as global variable but did not work
  // if (Math.abs(tree.value - target) < difference) {
  // 	closestValue = tree.value;
  // 	difference = Math.abs(tree.value - target);
  // }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, currentClosest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, currentClosest);
  } else {
    return currentClosest;
  }
}

function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

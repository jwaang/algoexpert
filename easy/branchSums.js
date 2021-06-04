// 5/18/21
// Time: O(n) | Space: O(n)
// Close to solving had to look at solution in the end.
function branchSumsHelper(root, branchSum, sumsArray) {
  if (root === null) {
    return;
  }

  var newBranchValue = branchSum + root.value;

  if (root.right === null && root.left === null) {
    sumsArray.push(newBranchValue);
    return;
  }

  branchSumsHelper(root.left, newBranchValue, sumsArray);
  branchSumsHelper(root.right, newBranchValue, sumsArray);
}

function branchSums(root) {
  var sumsArray = [];
  branchSumsHelper(root, 0, sumsArray);
  return sumsArray;
}

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

// 5/24/21
// Time: O(n) | Space: O(n)
function nodeDepths(root) {
  var depthArray = [];
  nodeDepthsHelper(root, 0, depthArray);

  return depthArray.reduce((a, b) => a + b, 0);
}

function nodeDepthsHelper(root, currentDepth, depthArray) {
  if (root === null) return;

  depthArray.push(currentDepth);

  nodeDepthsHelper(root.left, currentDepth + 1, depthArray);
  nodeDepthsHelper(root.right, currentDepth + 1, depthArray);
}

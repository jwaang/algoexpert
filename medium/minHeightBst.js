// 6/21/20
// Time: O(nlogn) | Space: O(n)
function minHeightBst(array) {
  return getHalf(null, array, 0, array.length - 1);
}

function getHalf(bst, array, minIdx, maxIdx) {
  if (maxIdx < minIdx) return;
  const mid = Math.floor((minIdx + maxIdx) / 2);
  if (!bst) {
    bst = new BST(array[mid]);
  } else {
    bst.insert(array[mid]);
  }
  getHalf(bst, array, minIdx, mid - 1);
  getHalf(bst, array, mid + 1, maxIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;

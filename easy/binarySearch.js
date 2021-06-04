// 5/26/21
// Time: O(logn) | Space: O(1)
function binarySearch(array, target) {
  return binarySearchHelper(array, 0, array.length - 1, target);
}

function binarySearchHelper(array, min, max, target) {
  const mid = Math.ceil((min + max) / 2);
  debugger;
  if (min > max) return -1;
  if (target === array[mid]) return mid;

  if (target < array[mid]) {
    return binarySearchHelper(array, min, mid - 1, target);
  } else if (target > array[mid]) {
    return binarySearchHelper(array, mid + 1, max, target);
  }
}

// const test = {
//   array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
//   target: 33,
// };

const test = {
  array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
  target: 70,
};

const res = binarySearch(test.array, test.target);
console.log(res);

// 5/26/21
// Time: O(n) | Space: O(1)
function findThreeLargestNumbers(array) {
  for (let i = 0; i < array.length - 2; ++i) {
    // swap values in set of 3 from least to greatest
    reorder(array, i);
    if (array[i + 3] < array[i]) {
      // if element after set of 3 is less than first element, we disregard and shift the set up
      shift(array, i);
    }
  }
  //final swap and return ordered set
  reorder(array, array.length - 3);
  return array.slice(-3);
}

function reorder(array, idx) {
  // sorts from least to greatest
  for (let j = idx; j < idx + 2; ++j) {
    if (array[j] > array[j + 1]) {
      let tmp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = tmp;
    }
  }
}

function shift(array, idx) {
  // shifts set of 3 up a position in array
  let tmp = array[idx + 3];
  for (let k = idx + 3; k > idx; --k) {
    array[k] = array[k - 1];
  }
  array[idx] = tmp;
}

const test = {
  array: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7],
  array1: [10, 5, 9, 10, 12],
  array2: [55, 7, 8, 3, 43, 11],
};

const res = findThreeLargestNumbers(test.array2);
console.log(res);
shift([10, 5, 9, 10, 12], 1);

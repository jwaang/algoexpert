// 5/27/21
// Best - Time: O(n) | Space: O(1)
// Avg/Worst - Time: O(n^2)
function insertionSort(array) {
  for (let i = 1; i <= array.length; ++i) {
    for (let j = i - 1; j > 0; --j) {
      if (array[j] < array[j - 1]) {
        swap(array, j);
      }
    }
  }
  return array;
}

function swap(array, idx) {
  let tmp = array[idx];
  array[idx] = array[idx - 1];
  array[idx - 1] = tmp;
}

const test = {
  array: [8, 5, 2, 9, 5, 6, 3],
};

const res = insertionSort(test.array);

console.log(res);

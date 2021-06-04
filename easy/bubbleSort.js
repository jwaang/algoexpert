// 5/27/21
// Best - Time: O(n)
// Avg/Worst - Time: O(n^2) | Space: O(1)
function bubbleSort(array) {
  let swapCounter = 1;
  while (swapCounter != 0) {
    swapCounter = 0;
    for (let i = 0; i < array.length - 1; ++i) {
      if (array[i] > array[i + 1]) {
        swap(array, i);
        ++swapCounter;
      }
    }
  }
  return array;
}

function swap(array, idx) {
  let tmp = array[idx + 1];
  array[idx + 1] = array[idx];
  array[idx] = tmp;
}

const test = {
  array: [8, 5, 2, 9, 5, 6, 3],
};

const res = bubbleSort(test.array);
console.log(res);

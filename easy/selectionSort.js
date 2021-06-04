// 5/27/21
// Time: O(n^2) | Space: O(1)
function selectionSort(array) {
  let pointerIdx = 0;
  for (let i = 0; i < array.length; ++i) {
    for (let j = i + 1; j < array.length; ++j) {
      if (array[pointerIdx] > array[j]) {
        pointerIdx = j;
      }
    }
    debugger;
    swap(array, pointerIdx, i);
    debugger;
    pointerIdx = i + 1;
  }
  return array;
}

function swap(array, firstIdx, secIdx) {
  let tmp = array[firstIdx];
  array[firstIdx] = array[secIdx];
  array[secIdx] = tmp;
}

const test = {
  array: [8, 5, 2, 9, 5, 6, 3],
};

const res = selectionSort(test.array);
console.log(res);

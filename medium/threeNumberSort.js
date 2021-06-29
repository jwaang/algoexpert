// 6/29/21
// Time: O(n) | Space: O(1)
// Naive Solution 1
// function threeNumberSort(array, order) {
//   let firstNumCount = 0;
//   let secondNumCount = 0;
//   let thirdNumCount = 0;

//   for (let i = 0; i < array.length; ++i) {
//     if (array[i] === order[0]) ++firstNumCount;
//     if (array[i] === order[1]) ++secondNumCount;
//     if (array[i] === order[2]) ++thirdNumCount;
//   }

//   replaceValueInArray(array, 0, firstNumCount, order[0]);
//   replaceValueInArray(array, firstNumCount, firstNumCount + secondNumCount, order[1]);
//   replaceValueInArray(array, firstNumCount + secondNumCount, firstNumCount + secondNumCount + thirdNumCount, order[2]);

//   return array;
// }

// function replaceValueInArray(array, startIdx, endIdx, number) {
//   for (let i = startIdx; i < endIdx; ++i) {
//     array[i] = number;
//   }
// }

// Time: O(n) | Space: O(1)
// Better Solution 2
function threeNumberSort(array, order) {
  let firstIdx = 0;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === order[0]) {
      swap(array, i, firstIdx);
      ++firstIdx;
    }
  }

  let secondIdx = firstIdx;
  for (let i = firstIdx; i < array.length; ++i) {
    if (array[i] === order[1]) {
      swap(array, i, secondIdx);
      ++secondIdx;
    }
  }
  return array;
}

function swap(array, idxOne, idxTwo) {
  let tmp = array[idxOne];
  array[idxOne] = array[idxTwo];
  array[idxTwo] = tmp;
}

const test = {
  array: [1, 0, 0, -1, -1, 0, 1, 1],
  order: [0, 1, -1],
};
const res = threeNumberSort(test.array, test.order);
console.log(res);

// 6/9/21
// Time: O(n) | Space: O(1)
function moveElementToEnd(array, toMove) {
  if (array.length === 0 || array.length === 1) return array;

  let ptrOne = 0;
  let ptrTwo = 1;
  while (ptrTwo != array.length) {
    if (array[ptrTwo] != toMove && array[ptrOne] != array[ptrTwo]) {
      swap(array, ptrOne, ptrTwo);
      ++ptrOne;
      ++ptrTwo;
      continue;
    }

    if (toMove === array[ptrTwo]) {
      ++ptrTwo;
      continue;
    }
  }
  return array;
}

function swap(array, ptrOne, ptrTwo) {
  let tmp = array[ptrOne];
  array[ptrOne] = array[ptrTwo];
  array[ptrTwo] = tmp;
}

const test = {
  array: [2, 1, 2, 2, 2, 3, 4, 2],
  toMove: 2,
  // array: [],
  // toMove: 3,
  // array: [1, 2, 4, 5, 3],
  // toMove: 3,
};
const res = moveElementToEnd(test.array, test.toMove);
console.log(res);

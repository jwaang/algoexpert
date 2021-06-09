// Doesn't work
// function smallestDifference(arrayOne, arrayTwo) {
//   arrayOne.sort((a, b) => a - b);
//   arrayTwo.sort((a, b) => a - b);

//   let oneIdx = 0;
//   let twoIdx = 0;
//   let smallestDiff = Math.abs(arrayOne[oneIdx] - arrayTwo[twoIdx]);

//   while (oneIdx != arrayOne.length && twoIdx != arrayTwo.length) {
//     let tmpDiff1;
//     if (oneIdx + 1 != arrayOne.length) {
//       tmpDiff1 = Math.abs(arrayOne[oneIdx + 1] - arrayTwo[twoIdx]);
//     }

//     let tmpDiff2;
//     if (twoIdx + 1 != arrayTwo.length) {
//       tmpDiff2 = Math.abs(arrayOne[oneIdx] - arrayTwo[twoIdx + 1]);
//     }

//     if ((tmpDiff1 && tmpDiff1 <= tmpDiff2) || tmpDiff1 < smallestDiff) {
//       smallestDiff = tmpDiff1;
//       ++oneIdx;
//     } else if ((tmpDiff2 && tmpDiff2 <= tmpDiff1) || tmpDiff2 < smallestDiff) {
//       smallestDiff = tmpDiff2;
//       ++twoIdx;
//     }

//     if (!tmpDiff1 && smallestDiff < tmpDiff2) {
//       return [arrayOne[oneIdx], arrayTwo[twoIdx]];
//     } else if (!tmpDiff2 && smallestDiff < tmpDiff1) {
//       return [arrayOne[oneIdx], arrayTwo[twoIdx]];
//     }
//   }
//   return [arrayOne[oneIdx], arrayTwo[twoIdx]];
// }

// 6/8/21
// Time: O(nlogn) | Space: O(1)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let oneIdx = 0;
  let twoIdx = 0;
  let smallestDiff = Math.abs(arrayOne[oneIdx] - arrayTwo[twoIdx]);
  let res = [];

  while (oneIdx != arrayOne.length && twoIdx != arrayTwo.length) {
    if (Math.abs(arrayOne[oneIdx] - arrayTwo[twoIdx]) < smallestDiff) {
      smallestDiff = Math.abs(arrayOne[oneIdx] - arrayTwo[twoIdx]);
      res = [arrayOne[oneIdx], arrayTwo[twoIdx]];
    }
    if (smallestDiff === 0) return [arrayOne[oneIdx], arrayTwo[twoIdx]];

    if (arrayOne[oneIdx] < arrayTwo[twoIdx]) {
      ++oneIdx;
    } else if (arrayOne[oneIdx] > arrayTwo[twoIdx]) {
      ++twoIdx;
    }
  }

  return res;
}

const test = {
  // arrayOne: [-1, 5, 10, 20, 28, 3],
  // arrayTwo: [26, 134, 135, 15, 17],
  // arrayOne: [-1, 5, 10, 20, 3],
  // arrayTwo: [26, 134, 135, 15, 17],
  arrayOne: [10, 0, 20, 25, 2000],
  arrayTwo: [1005, 1006, 1014, 1032, 1031],
};

const res = smallestDifference(test.arrayOne, test.arrayTwo);
console.log(res);

// 6/3/21
// Time: O(n^3) | Space: O(n)
// function threeNumberSum(array, targetSum) {
//   let res = [];
//   array.sort((a, b) => a - b);
//   for (let i = 0; i < array.length; ++i) {
//     let triplet = [];
//     for (let j = i + 1; j < array.length; ++j) {
//       triplet.push(array[i]);
//       let found = false;
//       triplet.push(array[j]);
//       let idx = j + 1;
//       while (idx != array.length) {
//         if (array[idx] + array[j] + array[i] === targetSum) {
//           triplet.push(array[idx]);
//           found = true;
//           break;
//         }
//         ++idx;
//       }
//       if (found) res.push(triplet);
//       triplet = [];
//     }
//   }
//   return res;
// }

// 6/3/21/
// Time: O(n^2) | Space: O(n)
function threeNumberSum(array, targetSum) {
  let res = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; ++i) {
    let triplet = [];
    let lPtr = i + 1;
    let rPtr = array.length - 1;
    while (lPtr < rPtr) {
      let calculatedSum = array[i] + array[lPtr] + array[rPtr];
      if (calculatedSum === targetSum) {
        triplet.push(array[i], array[lPtr], array[rPtr]);
        res.push(triplet);
        ++lPtr;
        --rPtr;
        triplet = [];
      } else if (calculatedSum < targetSum) {
        ++lPtr;
      } else if (calculatedSum > targetSum) {
        --rPtr;
      }
    }
  }
  return res;
}

// const test = {
//   array: [12, 3, 1, 2, -6, 5, -8, 6],
//   targetSum: 0,
// };
const test = {
  array: [12, 3, 1, 2, -6, 5, 0, -8, -1, 6],
  targetSum: 0,
};
const res = threeNumberSum(test.array, test.targetSum);
console.log(res);

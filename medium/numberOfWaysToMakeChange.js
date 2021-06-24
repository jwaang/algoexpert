// 6/23/21
// Time: O(nd) | Space: O(n)
function numberOfWaysToMakeChange(n, denoms) {
  let array = new Array(n + 1).fill(0);
  array[0] = 1;
  for (let i = 0; i < denoms.length; ++i) {
    const currentDenom = denoms[i];
    for (let amount = 1; amount <= n; ++amount) {
      if (currentDenom <= amount) {
        array[amount] += array[amount - currentDenom]
      }
    }
  }
  return array[n];
}

// function numberOfWaysToMakeChange(n, denoms) {
//   let res = 0;
//   let previousMultipleArray = [];
//   let currentMultipleArray = [];
//   for (let j = 0; j < denoms.length; ++j) {
//     const currentDenom = denoms[j]

//     for (let i = 1; i * currentDenom <= n; ++i) {
//       const multiple = i * currentDenom;
//       if (multiple === n) ++res;
//       currentMultipleArray.push(multiple);
//     }

//     if (j > 0) {
//       for (let i = 0; i < previousMultipleArray.length; ++i) {
//         for (let k = 0; k < currentMultipleArray.length; ++k) {
//           console.log(previousMultipleArray[i], currentMultipleArray[k])
//           const addedValue = previousMultipleArray[i] + currentMultipleArray[k];
//           if (addedValue === n) ++res;
//           if (addedValue < n) {
//             console.log(currentMultipleArray)
//             currentMultipleArray.push(addedValue)
//             continue;
//           }
//         }
//       }
//     }

//     previousMultipleArray = currentMultipleArray;
//     currentMultipleArray = [];
//   }
//   return res;
// }

const test = {
  // "n": 6,
  // "denoms": [1, 5]
  
  "n": 12,
  "denoms": [2, 3, 7]

}
const res = numberOfWaysToMakeChange(test.n, test.denoms);
console.log(res);
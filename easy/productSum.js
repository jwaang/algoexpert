// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

// Atempt 1
// function productSum(array) {
//   let currentDepth = 1;
//   let currentSum = 0;
//   for (let i = 0; i < array.length; ++i) {
//     if (Array.isArray(array[i])) {
//       currentDepth += 1;
//       productSumHelper(array[i], currentDepth, currentSum);
//       currentDepth -= 1;
//     } else {
//       currentSum += array[i];
//     }
//   }
//   return currentSum;
// }

// function productSumHelper(array, currentDepth, currentSum) {
//   console.log(array);
//   debugger;
//   for (let i = 0; i < array.length; ++i) {
//     console.log(array[i]);
//     debugger;
//     if (Array.isArray(array[i])) {
//       console.log(array[i] + " is an array");
//       currentDepth += 1;
//       productSumHelper(array[i], currentDepth, currentSum);
//       currentDepth -= 1;
//       debugger;
//     }
//     console.log("calced " + array[i] * currentDepth);
//     console.log("currentSum " + currentSum);
//     currentSum += array[i] * currentDepth;
//   }
// }

//Attempt 2
// function productSum(array) {
//   let currentDepth = 1;
//   let currentSum = 0;
//   for (let i = 0; i < array.length; ++i) {
//     if (Array.isArray(array[i])) {
//       currentDepth += 1;
//       currentSum += productSumHelper(array[i], currentDepth);
//       currentDepth -= 1;
//     } else {
//       currentSum += array[i];
//     }
//   }
//   return currentSum;
// }

// function productSumHelper(array, currentDepth) {
//   let nestedSum = 0;
//   for (let i = 0; i < array.length; ++i) {
//     if (Array.isArray(array[i])) {
//       currentDepth += 1;
//       nestedSum += productSumHelper(array[i], currentDepth);
//       currentDepth -= 1;
//     } else {
//       nestedSum += array[i] * currentDepth;
//     }
//   }
//   return nestedSum;
// }

function productSum(array, currentDepth = 1) {
  let currentSum = 0;
  for (let i = 0; i < array.length; ++i) {
    if (Array.isArray(array[i])) {
      currentSum += productSum(array[i], currentDepth + 1);
    } else {
      currentSum += array[i];
    }
  }
  return currentSum * currentDepth;
}

const test = {
  array: [5, 2, [7, -1], 3, [6, [-13, 8], 4]],
};

const res = productSum(test.array);
console.log(res);

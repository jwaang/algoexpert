// 7/10/21
// looked at solution
function powerset(array, idx = null) {
  if (idx === null) idx = array.length - 1;
  if (idx < 0) return [[]];

  const subsets = powerset(array, idx - 1);
  const length = subsets.length;
  for (let i = 0; i < length; ++i) {
    subsets.push(subsets[i].concat(array[idx]));
  }

  return subsets;
}

// function powerset(array) {
//   const subsets = [[]];
//   for (const element of array) {
//     const length = subsets.length;
//     for (let i = 0; i < length; ++i) {
//       subsets.push(subsets[i].concat(element));
//     }
//   }
//   return subsets;
// }

const test = {
  array: [1, 2, 3],
};

console.log(powerset(test.array));

// 6/20/21
// Time: O(n) | Space: O(n)
// function firstDuplicateValue(array) {
//   const s = new Set();
//   for (const c of array) {
//     if (s.has(c)) {
//       return c;
//     }
//     s.add(c);
//   }
//   return -1;
// }

// 6/20/21
// Time: O(n) | Space: O(1)
// looked at solution
function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; ++i) {
    const idx = Math.abs(array[i]) - 1;
    if (array[idx] > 0) {
      array[idx] *= -1;
      console.log(array);
    } else {
      return array[i] < 0 ? (array[i] *= -1) : array[i];
    }
  }
  return -1;
}

const test = {
  // array: [2, 1, 5, 2, 3, 3, 4],
  array: [2, 1, 5, 3, 3, 2, 4],
};
const res = firstDuplicateValue(test.array);
console.log(res);

// 6/23/21
// Time: O(n) | Space: O(1)
// looked at solution
function kadanesAlgorithm(array) {
  let previousValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; ++i) {
    const currentMax = Math.max(previousValue + array[i], array[i])
    maxValue = Math.max(maxValue, currentMax)
    previousValue = currentMax;
  }
  return maxValue;
}

const test = {
  // "array": [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4],
  // array: [-2, -1]
  "array": [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
}
const res = kadanesAlgorithm(test.array)
console.log(res);
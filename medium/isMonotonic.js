// 6/10/21
// Time: O(n) | Space: O(1)
function isMonotonic(array) {
  // lenghts 0-2 always returns true
  if (array.length === 0 || array.length === 1 || array.length === 2) return true;

  // find order of increasing or decreasing of first non repeating pairs
  let j = 1;
  while (j != array.length) {
    if (array[j - 1] === array[j]) {
      ++j;
    } else {
      break;
    }
  }
  let order = array[j - 1] < array[j] ? "INC" : "DEC";

  // if discrepancy, return false
  for (let i = j; i < array.length; ++i) {
    if (order === "INC" && array[i - 1] > array[i]) {
      return false;
    }

    if (order === "DEC" && array[i - 1] < array[i]) {
      return false;
    }
  }

  return true;
}

const test = {
  // array: [-1, -5, -10, -1100, -1100, -1101, -1102, -9001],
  // array: [2, 1],
  // array: [1, 2, 3, 3, 2, 1],
  array: [-1, -5, 10],
  // array: [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11],
};
const res = isMonotonic(test.array);
console.log(res);

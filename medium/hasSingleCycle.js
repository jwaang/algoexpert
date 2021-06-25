// 6/24/21
// Time: O(n) | Space: O(1)
function hasSingleCycle(array) {
  let startIdx = 0;
  let counter = 0;
  while (counter < array.length) {
    if (counter > 0 && startIdx === 0) return false;
    const jump = array[startIdx]
    let modIdx = (startIdx + jump) % array.length
    let newIdx = modIdx >= 0 ? modIdx : array.length + modIdx
    startIdx = newIdx
    ++counter
  }
  return startIdx === 0
}

const test = {
  // "array": [2, 3, 1, -4, -4, 2]
  // "array": [0, 1, 1, 1, 1]
  // "array": [1, 2, 3, 4, -2, 3, 7, 8, -26]
  "array": [10, 11, -6, -23, -2, 3, 88, 908, -26]
}
const res = hasSingleCycle(test.array)
console.log(res)
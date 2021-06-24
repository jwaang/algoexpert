// 6/22/20
// Time: O(n) | Space: O(n)
function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0;
 	if (array.length < 2) return 1;
  let maxSumValues = [];
  maxSumValues.push(array[0],Math.max(array[0], array[1]))
  for (let i = 2; i < array.length; ++i){
    const currentMaxValue = Math.max(maxSumValues[i - 1], maxSumValues[i - 2] + array[i])
    maxSumValues.push(currentMaxValue)
    console.log(maxSumValues)
  }
  return maxSumValues[array.length - 1];
}

const test = {
  // "array": [10, 5, 20, 25, 15, 5, 5, 15],
  // array: [75, 105, 120, 75, 90, 135],
  // array: [7, 10, 12, 7, 9, 14],
  // array: [30, 25, 50, 55, 100],
  "array": [4, 3, 5, 200, 5, 3]
}
const res = maxSubsetSumNoAdjacent(test.array)
console.log(res);
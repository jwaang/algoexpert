// 6/23/21
// Time: O(w*h) | Space: O(w*h)
function numberOfWaysToTraverseGraph(width, height) {
  const array = new Array(height)
  for (let i = 0; i < array.length; ++i) {
    array[i] = new Array(width).fill(0)
  }
  for (let widthIdx = 0; widthIdx < array.length; ++widthIdx) {
    for (let heightIdx = 0; heightIdx < array[widthIdx].length; ++heightIdx) {
      if (heightIdx === 0 || widthIdx === 0) {
        array[widthIdx][heightIdx] = 1;
      } else {
        const left = array[widthIdx][heightIdx - 1];
        const up = array[widthIdx - 1][heightIdx];
        array[widthIdx][heightIdx] = left + up
      }
    }
  }

  return array[height - 1][width - 1]
}

// function numberOfWaysToTraverseGraph(widthIdx, heightIdx) {
//   if (widthIdx === 1 || heightIdx === 1) return 1;
//   return numberOfWaysToTraverseGraph(widthIdx - 1, heightIdx) + numberOfWaysToTraverseGraph(widthIdx, heightIdx - 1)
// }

const test = {
  "width": 3,
  "height": 4
}
const res = numberOfWaysToTraverseGraph(test.width, test.height)
console.log(res);
// 6/24/21
// Time: O(r*c) | Space: O(r*c)
function riverSizes(matrix) {
  const totalRow = matrix.length;
  const totalCol = matrix[0].length;
  const visitedArray = []
  let res = []
  for (let i = 0; i < totalRow; ++i) {
    matrix[i].push(null)
    let arr = new Array(totalCol).fill(false)
    arr.push(null)
    visitedArray.push(arr)
  }
  matrix.push(new Array(totalCol + 1).fill(null))
  visitedArray.push(new Array(totalCol + 1).fill(null))
  for (let row = 0; row < totalRow; ++row) {
    for (let col = 0; col < totalCol; ++col) {
      if (visitedArray[row][col] === false && matrix[row][col] === 1) {
        const riverSize = findRiverBFS(matrix, visitedArray, row, col)
        res.push(riverSize)
      }
    }
  }

  return res;
}

function findRiverBFS(matrix, visitedArray, row, col) {
  let queue = [{row, col}];
  let currentRiverSize = 0;

  while (queue.length !== 0) {
    console.log(queue)
    let { row, col } = queue.shift();
    if (!visitedArray[row][col]) {
      ++currentRiverSize;
      if (matrix[row][col + 1] && matrix[row][col + 1] === 1) {
        queue.push({ row, col: col + 1 })
      }
      if (matrix[row + 1][col] && matrix[row + 1][col] === 1) {
        queue.push({ row: row + 1, col })
      }
			if (col - 1 >= 0 && matrix[row][col - 1] && matrix[row][col - 1] === 1) {
        queue.push({ row, col: col - 1 })
      }
			if (row - 1 >= 0 && matrix[row - 1][col] && matrix[row - 1][col] === 1) {
        queue.push({ row: row - 1, col })
      }
			visitedArray[row][col] = true;
    }
  }
  return currentRiverSize;
}

const test = {
  // "matrix": [
  //   [1, 0, 0, 1, 0],
  //   [1, 0, 1, 0, 0],
  //   [0, 0, 1, 0, 1],
  //   [1, 0, 1, 0, 1],
  //   [1, 0, 1, 1, 0]
  // ]
  "matrix": [
    [1, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1]
  ]
  // "matrix": [
  //   [1, 1, 1, 1, 1, 1, 1],
  //   [1, 1, 1, 1, 1, 1, 1],
  //   [1, 1, 1, 1, 1, 1, 1],
  //   [1, 1, 1, 1, 1, 1, 1],
  //   [1, 1, 1, 1, 1, 1, 1],
  //   [1, 1, 1, 1, 1, 1, 1],
  //   [1, 1, 1, 1, 1, 1, 1]
  // ]
  //   "matrix": [
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  // ],
  //     "matrix": [
  //   [1, 1],
  //   [1, 1],
  // ]
}
const res = riverSizes(test.matrix)
console.log(res);
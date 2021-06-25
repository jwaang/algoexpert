// 6/24/21
// Time: O(r*c) | Space: O(r*c)
function removeIslands(matrix) {
  let safeBorders = []
  for (let row = 0; row < matrix.length; ++row) {
    safeBorders.push(new Array(matrix[0].length).fill(false))
  }

  for (let row = 0; row < matrix.length; ++row) {
    for (let col = 0; col < matrix[0].length; ++col) {
      if (matrix[row][col] === 1 && (row === 0 || col === 0 || row === matrix.length - 1 || col === matrix[0].length - 1)) {
        depthFirstSearch(row, col, safeBorders, matrix)
      }
    }
  }

  for (let row = 0; row < safeBorders.length; ++row) {
    for (let col = 0; col < safeBorders[0].length; ++col) {
      matrix[row][col] = safeBorders[row][col] ? 1 : 0;
    }
  }

  return matrix;
}

function depthFirstSearch(row, col, safeBorders, matrix) {
  let stack = [{row, col}];
  while (stack.length != 0) {
    const { row, col } = stack.pop();
    if (!safeBorders[row][col]) {
      safeBorders[row][col] = true;
      if (row + 1 < matrix.length && matrix[row + 1][col] === 1) { // top
        stack.push({ row: row + 1, col})
      }
      if (col + 1 < matrix[0].length && matrix[row][col + 1] === 1) { // right
        stack.push({ row, col: col + 1})
        }
      if (row - 1 >= 0 && matrix[row - 1][col] === 1) { // bottom
        stack.push({ row: row - 1, col})
          }
      if (col - 1 >= 0 && matrix[row][col - 1] === 1) { // left
        stack.push({ row, col: col - 1})
      }
    }
  }
}

// Passes 12/16 test cases
// function removeIslands(matrix) {
//   let hasVisited = []
//   for (let row = 0; row < matrix.length; ++row) {
//     hasVisited.push(new Array(matrix[0].length).fill(false))
//   }

//   for (let row = 0; row < matrix.length; ++row) {
//     for (let col = 0; col < matrix[0].length; ++col) {
//       if (hasVisited[row][col]) {
//         continue;
//       }

//       if (matrix[row][col] === 1) {
//         const isNotIsland = bfs(row, col, hasVisited, matrix);
//         if (row === 0 || col === 0 || row === matrix.length - 1 || col === matrix[0].length - 1) {
//           continue;
//         } else if (!isNotIsland) {
//           // matrix[row][col] = 0
//           replaceWithZero(row, col, hasVisited, matrix);
//         }
//       }
//     }
//   }
//   return matrix;
// }

// function bfs(row, col, hasVisited, matrix) {
//   let isNotIsland = false;
//   let queue = [{row, col}]
//   while (queue.length > 0) {
//     const { row, col } = queue.shift()
//     if (row === 0 || col === 0 || row === matrix.length - 1 || col === matrix[0].length - 1) {
//       isNotIsland = true;
//     }
//     if (!hasVisited[row][col]) {
//       if (row + 1 < matrix.length && matrix[row + 1][col] === 1) { // top
//         queue.push({ row: row + 1, col})
//       }
//       if (col + 1 < matrix[0].length && matrix[row][col + 1] === 1) { // right
//         queue.push({ row, col: col + 1})
//         }
//       if (row - 1 >= 0 && matrix[row - 1][col] === 1) { // bottom
//         queue.push({ row: row - 1, col})
//           }
//       if (col - 1 >= 0 && matrix[row][col - 1] === 1) { // left
//         queue.push({ row, col: col - 1})
//       }
//       hasVisited[row][col] = true;
//     }
//   }
//   return isNotIsland
// }

const test = {
  "matrix": [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
  ]
}
const res = removeIslands(test.matrix)
console.log(res)
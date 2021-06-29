// 6/29/21
// Time: O(r+c) | Space: O(1)
function searchInSortedMatrix(matrix, target) {
  let res = [];
  let row = 0;
  let col = matrix[0].length - 1;
  while (row != matrix.length && col != -1) {
    const val = matrix[row][col];
    if (target < val) {
      --col;
    } else if (target > val) {
      ++row;
    } else if (target === val) {
      return [row, col];
    }
  }
  return [-1, -1];
}

const test = {
  // matrix: [
  //   [1, 4, 7, 12, 15, 1000],
  //   [2, 5, 19, 31, 32, 1001],
  //   [3, 8, 24, 33, 35, 1002],
  //   [40, 41, 42, 44, 45, 1003],
  //   [99, 100, 103, 106, 128, 1004],
  // ],
  // target: 44,
  matrix: [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ],
  target: 4,
};

const res = searchInSortedMatrix(test.matrix, test.target);
console.log(res);

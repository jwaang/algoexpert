// 6/19/21
// Time: O(n) | Space: O(n)
// This question took me way longer than i expected lol
function spiralTraverse(array) {
  const res = [];
  let start_row = 0;
  let end_row = array.length;
  let start_col = 0;
  let end_col = array[0].length;

  while (start_col < end_col && start_row < end_row) {
    // right
    for (let i = start_col; i < end_col; ++i) {
      res.push(array[start_row][i]);
      console.log("r", res);
      console.log({ start_row, end_row, start_col, end_col });
    }

    // down
    for (let i = start_row + 1; i < end_row; ++i) {
      res.push(array[i][end_col - 1]);
      console.log("d", res);
      console.log({ start_row, end_row, start_col, end_col });
    }

    // left
    for (let i = end_col - 2; i >= start_col; --i) {
      if (start_row === end_row - 1) break;
      res.push(array[end_row - 1][i]);
      console.log("l", res);
      console.log({ start_row, end_row, start_col, end_col });
    }

    // up
    for (let i = end_row - 2; i > start_row; --i) {
      if (start_col === end_col - 1) break;
      res.push(array[i][start_col]);
      console.log("u", res);
      console.log({ start_row, end_row, start_col, end_col });
    }

    ++start_row;
    --end_row;
    ++start_col;
    --end_col;
  }

  return res;
}

const test = {
  // array: [
  //   [1, 2, 3, 4],
  //   [12, 13, 14, 5],
  //   [11, 16, 15, 6],
  //   [10, 9, 8, 7],
  // ],
  // array: [
  //   [4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
  //   [12, 19, 15, 16, 20, 18, 13, 17, 11, 14],
  // ],
  array: [
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6],
  ],
};
const res = spiralTraverse(test.array);
console.log(res);

// 6/20/21
// Space: O(nlogn) | Space: O(n)
// looked at solution
function mergeOverlappingIntervals(array) {
  let res = [];
  array.sort((a, b) => a[0] - b[0]);
  let i = 1;
  let currInt = array[0];
  res.push(currInt);
  while (i != array.length) {
    let nextInt = array[i];
    if (currInt[1] >= nextInt[0]) {
      currInt[1] = Math.max(currInt[1], nextInt[1]);
    } else {
      currInt = nextInt;
      res.push(currInt);
    }
    ++i;
  }
  return res;
}

const test = {
  intervals: [
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ],
  // intervals: [
  //   [1, 3],
  //   [2, 8],
  //   [9, 10],
  // ],
};
const res = mergeOverlappingIntervals(test.intervals);
console.log(res);

// 6/20/21
// Time: O(n) | Space: O(1)
// Had to look at solution
longestPeak = (array) => {
  let maxLength = 0;
  for (let i = 1; i < array.length - 1; ++i) {
    if (!isTop(i, array)) {
      continue;
    }

    let left = i - 2;
    while (left >= 0 && array[left] < array[left + 1]) {
      --left;
    }

    let right = i + 2;
    while (right < array.length && array[right] < array[right - 1]) {
      ++right;
    }

    let currLength = right - left - 1;
    maxLength = Math.max(maxLength, currLength);
  }

  return maxLength;
};

isTop = (index, array) => {
  if (array[index] > array[index + 1] && array[index] > array[index - 1]) {
    peakHeight = array[index];
    return true;
  }
  return false;
};

const test = {
  // array: [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3],
  // array: [],
  // array: [1, 3, 2],
  array: [1, 2, 3, 4, 5, 1],
};
const res = longestPeak(test.array);
console.log(res);

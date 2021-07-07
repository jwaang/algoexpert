// 7/6/21
// Time: O(n) | Space: O(n)
function reverseWordsInString(string) {
  let stringArray = new Array(string.length).fill("");
  for (let i = 0; i < string.length / 2; ++i) {
    swap(i, string.length - 1 - i, string, stringArray);
  }

  let idxOne = 0;
  for (let i = 0; i < string.length; ++i) {
    if (stringArray[i] === " ") {
      swapArray(idxOne, i - 1, stringArray);
      idxOne = i + 1;
    }
  }

  swapArray(idxOne, string.length - 1, stringArray);
  return stringArray.join("");
}

function swapArray(idx1, idx2, array) {
  for (let i = 0; i < (idx2 - idx1) / 2; ++i) {
    let tmp = array[idx1 + i];
    array[idx1 + i] = array[idx2 - i];
    array[idx2 - i] = tmp;
  }
}

function swap(idx1, idx2, string, stringArray) {
  let tmp = string[idx1];
  stringArray[idx1] = string[idx2];
  stringArray[idx2] = tmp;
}

const test = {
  string: "AlgoExpert is the best!",
};
console.log(reverseWordsInString(test.string));

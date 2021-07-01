// 6/30/21
// Time: O(n^2) | Space: O(n)
function longestPalindromicSubstring(string) {
  let longestPalindromeArray = [];
  for (let i = 0; i < string.length; ++i) {
    const single = findSinglePalindrome(i, string, []);
    const double = findDoublePalindrome(i, string, []);
    longestPalindromeArray = longestPalindromeArray.length < single.length ? single : longestPalindromeArray;
    longestPalindromeArray = longestPalindromeArray.length < double.length ? double : longestPalindromeArray;
  }
  return longestPalindromeArray.join("");
}

function findSinglePalindrome(startIdx, string, array) {
  array.push(string[startIdx]);
  let left = startIdx - 1;
  let right = startIdx + 1;
  while (left >= 0 && right < string.length) {
    if (string[left] === string[right]) {
      array.push(string[right]);
      array.unshift(string[left]);
      --left;
      ++right;
    } else {
      break;
    }
  }
  return array;
}

function findDoublePalindrome(left, string, array) {
  let right = left + 1;
  while (left >= 0 && right < string.length) {
    if (string[left] === string[right]) {
      array.push(string[right]);
      array.unshift(string[left]);
      --left;
      ++right;
    } else {
      break;
    }
  }
  return array;
}

const test = {
  // string: "abaxyzzyxf",
  // string: "a",
  string: "abcdefgfedcba",
  // string: "abcdefgfedcbazzzzzzzzzzzzzzzzzzzz",
};

const res = longestPalindromicSubstring(test.string);
console.log(res);

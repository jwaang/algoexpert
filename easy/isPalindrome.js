function isPalindrome(string) {
  let isPalindrome = true;

  for (let i = 0; i < string.length / 2; ++i) {
    if (string.charAt(i) !== string.charAt(string.length - i - 1)) return false;
  }

  return isPalindrome;
}

const test = {
  string: "dada",
};

const res = isPalindrome(test.string);
console.log(res);

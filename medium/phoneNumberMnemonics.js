// 7/10/21
// looked at solution
// Time: O(4^n * n) | Space: O(4^n * n)
function phoneNumberMnemonics(phoneNumber) {
  let mnemonicsFound = [];
  let currentMnemonic = new Array(phoneNumber.length).fill(0);
  phoneNumberMnemonicsHelper(0, mnemonicsFound, currentMnemonic, phoneNumber);
  return mnemonicsFound;
}

function phoneNumberMnemonicsHelper(idx, mnemonicsFound, currentMnemonic, phoneNumber) {
  if (idx === phoneNumber.length) {
    mnemonicsFound.push(currentMnemonic.join(""));
  } else {
    const letters = PHONE_MAPPING[phoneNumber[idx]];
    for (const letter of letters) {
      currentMnemonic[idx] = letter;
      phoneNumberMnemonicsHelper(idx + 1, mnemonicsFound, currentMnemonic, phoneNumber);
    }
  }
}

const PHONE_MAPPING = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const test = {
  phoneNumber: "1905",
};
console.log(phoneNumberMnemonics(test.phoneNumber));

// function runLengthEncoding(string) {
//   let currentChar = string[0];
//   let charCounter = 0;
//   let res = "";

//   for (let i = 0; i <= string.length; ++i) {
//     if (i === string.length) {
//       if (charCounter > 9) {
//         res += "9" + currentChar + (charCounter - 9) + currentChar;
//       } else {
//         res += charCounter + currentChar;
//       }
//       break;
//     }
//     if (string[i] != currentChar) {
//       if (charCounter > 9) {
//         res += "9" + currentChar + (charCounter - 9) + currentChar;
//       } else {
//         res += charCounter + currentChar;
//       }

//       currentChar = string[i];
//       charCounter = 0;
//     }
//     if (string[i] === currentChar) ++charCounter;
//   }
//   return res;
// }

// 6/2/21
// Time: O(n) | Space: O(1)
function runLengthEncoding(string) {
  let currentChar = string[0];
  let charCounter = 0;
  let res = "";
  let idx = 0;
  while (idx != string.length) {
    if (string[idx] === currentChar) ++charCounter;
    if (idx + 1 <= string.length && string[idx] != string[idx + 1]) {
      let multiples = Math.floor(charCounter / 9);
      for (let m = 0; m < multiples; ++m) {
        if (charCounter > 9) {
          res += "9" + currentChar;
          charCounter -= 9;
        }
      }
      res += charCounter + currentChar;
      currentChar = string[idx + 1];
      charCounter = 0;
    }
    ++idx;
  }
  return res;
}

const test = {
  string: "AAAAAAAAAAAAABBCCCCDD",
  string1: "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA",
};

const res = runLengthEncoding(test.string1);
console.log(res);

// function firstNonRepeatingCharacter(string) {
//   let charDictionary = {};
//   let char = "";
//   for (const s of string) {
//     if (charDictionary[s]) {
//       char = s;
//       break;
//     } else charDictionary[s] = 1;
//   }
//   for (let i = 0; i < string.length; ++i) {
//     if (string[i] === char) return i - 1;
//   }
//   return -1;
// }

// 6/2/21
// Time: O(n^2) | Space: O(1)
// function firstNonRepeatingCharacter(string) {
//   let charDictionary = {};
//   for (const s of string) {
//     if (charDictionary[s]) charDictionary[s] += 1;
//     else charDictionary[s] = 1;
//   }

//   console.log(charDictionary);

//   let letters = [];
//   for (const [key, value] of Object.entries(charDictionary)) {
//     if (value === 1) letters.push(key);
//   }

//   let lowestIdx = Number.MAX_VALUE;
//   for (let i = 0; i < string.length; ++i) {
//     for (let j = 0; j < letters.length; ++j) {
//       if (string[i] === letters[j] && lowestIdx > i) lowestIdx = i;
//     }
//   }

//   return lowestIdx === Number.MAX_VALUE ? -1 : lowestIdx;
// }

// 6/2/21
// Time: O(n) | Space: O(1)
function firstNonRepeatingCharacter(string) {
  let charDictionary = {};
  for (const s of string) {
    if (charDictionary[s]) charDictionary[s] += 1;
    else charDictionary[s] = 1;
  }

  for (let i = 0; i < string.length; ++i) {
    const char = string[i];
    if (charDictionary[char] === 1) return i;
  }

  return -1;
}

const test = {
  string: "faadabcbbebdf",
};

const res = firstNonRepeatingCharacter(test.string);
console.log(res);

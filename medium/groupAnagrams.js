// 7/6/21
// Time: O(w * n * logn) | Space: O(w*n)
// w = # of words, n = length of longest word
// looked at solution
function groupAnagrams(words) {
  let dict = {};
  for (const word of words) {
    const w = word.split("").sort().join("");
    if (w in dict) {
      dict[w].push(word);
    } else {
      dict[w] = [word];
    }
  }
  return Object.values(dict);
}

const test = {
  words: ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"],
};

console.log(groupAnagrams(test.words));

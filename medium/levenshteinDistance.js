// skipped
function levenshteinDistance(word1, word2) {
 // base case
  if (word1 === "" && word2 === "") return 0;
  if (word1 === "" && word2.length > 0) return word2.length;
  if (word2 === "" && word1.length > 0) return word1.length;
  // word1 --> rows
  // word2 --> columns
  const matrix = new Array(word1.length + 1).fill([]);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(word2.length + 1).fill(0);
  }
  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i == 0) {
        matrix[i][j] = j;
      } else if (j == 0) {
        matrix[i][j] = i;
      } else if (word1[i - 1] === word2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        const updatePoint = matrix[i - 1][j - 1];
        // minimum of insert and delete
        const insertPoint = matrix[i][j - 1];
        const deletePoint = matrix[i - 1][j];
        matrix[i][j] =
          1 + Math.min(Math.min(insertPoint, deletePoint), updatePoint);
      }
    }
  }
  return matrix[word1.length][word2.length];
}

const test = {
  "str1": "abc",
  "str2": "yabd"
}
const res = levenshteinDistance(test.str1, test.str2)
console.log(res);
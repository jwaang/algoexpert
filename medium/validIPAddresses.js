// 7/6/21
// Time: O(1) | Space: O(1)

function validIPAddresses(string) {
  let res = [];
  for (let i = 0; i < Math.min(string.length, 4); i++) {
    let currentIP = ["", "", "", ""];
    currentIP[0] = string.slice(0, i);
    if (!isValidSubsequence(currentIP[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentIP[1] = string.slice(i, j);
      if (!isValidSubsequence(currentIP[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); ++k) {
        currentIP[2] = string.slice(j, k);
        currentIP[3] = string.slice(k);
        if (isValidSubsequence(currentIP[2]) && isValidSubsequence(currentIP[3])) res.push(currentIP.join("."));
      }
    }
  }
  return res;
}

function isValidSubsequence(string) {
  if (parseInt(string) > 255) return false;
  return string.length === parseInt(string).toString().length;
}

const test = {
  string: "1921680",
};
console.log(validIPAddresses(test.string));

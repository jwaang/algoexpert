// 5/26/21
// Time: O(n) | Space: O(1)
function getNthFib(n) {
  if (n === 1) return 0;
  if (n === 2 || n === 3) return 1;
  return getNthFib(n - 2) + getNthFib(n - 1);
}

let res = getNthFib(1);
console.log(res);

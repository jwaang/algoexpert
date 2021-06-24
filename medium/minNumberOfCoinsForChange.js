// 6/23/21
// Time: O(nd) | Space: O(n)
function minNumberOfCoinsForChange(n, denoms) {
  let array = new Array(n + 1).fill(Infinity);
  array[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < array.length; ++amount) {
      if (denom <= amount) {
        array[amount] = Math.min(array[amount], array[amount - denom] + 1);
      }
    }
  }
  return array[n] !== Infinity ? array[n] : -1;
}

const test ={
  "n": 6,
  "denoms": [1,2,4]
}
const res = minNumberOfCoinsForChange(test.n, test.denoms)
console.log(res);
// 5/17/21
// TIme: O(nlogn) | Space: O(1)
// Note: Had to look at video explanation and last hint
function nonConstructibleChange(coins) {
  var sortedCoins = coins.sort((a, b) => a - b);
  var change = 0;

  sortedCoins.forEach((coin) => {
    if (coin > change + 1) {
      return change + 1;
    } else if (coin <= change + 1) {
      change += coin;
    }
  });
  return change + 1;
}

coins = [5, 7, 1, 1, 2, 3, 22];
// coins = [1, 2, 3];
// coins = [1, 1];
var res = nonConstructibleChange(coins);
console.log(res);

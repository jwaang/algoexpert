// 5/24/21
// Time: O(nlogn) | Space: O(n)
// function minimumWaitingTime(queries) {
// 	queries.sort((a, b) => a - b);
// 	var totalWaitingTime = [0];
// 	var previousWaitingTime = 0;
// 	var i = 0;
// 	while (totalWaitingTime.length !== queries.length) {
// 		previousWaitingTime += queries[i];
// 		totalWaitingTime.push(previousWaitingTime);
// 		++i;
// 	}
//   return totalWaitingTime.reduce((a, b) => a + b);
// }

// Time: O(nlogn) | Space: O(1)
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  var totalWaitingTime = 0;
  var previousWaitingTime = 0;
  for (var i = 0; i < queries.length - 1; ++i) {
    previousWaitingTime = previousWaitingTime + queries[i];
    totalWaitingTime = totalWaitingTime + previousWaitingTime;
  }
  return totalWaitingTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;

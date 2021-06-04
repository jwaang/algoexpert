// 5/25/21
// Time: O(nlogn) | Space: O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  var speedSum = 0;
  if (fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
    for (var i = 0; i < redShirtSpeeds.length; ++i) {
      speedSum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
    for (var i = 0; i < redShirtSpeeds.length; ++i) {
      speedSum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }
  }
  return speedSum;
}

var test = {
  redShirtSpeeds: [5, 5, 3, 9, 2],
  blueShirtSpeeds: [3, 6, 7, 2, 1],
  fastest: true,
};
tandemBicycle(test.redShirtSpeeds, test.blueShirtSpeeds, test.fastest);

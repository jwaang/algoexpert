// 5/25/21
// Time: O(nlogn) | Space: O(1)
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  var firstSign;
  for (var i = 0; i < redShirtHeights.length; ++i) {
    const diff = redShirtHeights[i] - blueShirtHeights[i];
    if (diff === 0) return false;
    if (i === 0) diff > 0 ? (firstSign = "+") : (firstSign = "-");
    if (diff > 0 && firstSign === "-") return false;
    if (diff < 0 && firstSign === "+") return false;
  }
  return true;
}

redShirtHeights = [3, 5, 6, 8, 2];
blueShirtHeights = [2, 4, 7, 5, 1];
const val = classPhotos(redShirtHeights, blueShirtHeights);
console.log(val);

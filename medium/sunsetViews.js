// 7/7/21
// Time: O(n) | Space: O(n)
function sunsetViews(buildings, direction) {
  let currentMax = -Infinity;
  let res = [];
  if (direction === "EAST") {
    for (let i = buildings.length - 1; i >= 0; --i) {
      if (buildings[i] > currentMax) {
        currentMax = buildings[i];
        res.unshift(i);
      }
    }
  } else if (direction === "WEST") {
    for (let i = 0; i < buildings.length; ++i) {
      if (buildings[i] > currentMax) {
        currentMax = buildings[i];
        res.push(i);
      }
    }
  }
  return res;
}
const test = {
  buildings: [3, 5, 4, 4, 3, 1, 3, 2],
  direction: "EAST",
  // buildings: [3, 5, 4, 4, 3, 1, 3, 2],
  // direction: "WEST",
};
console.log(sunsetViews(test.buildings, test.direction));

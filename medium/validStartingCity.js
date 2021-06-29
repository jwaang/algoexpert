// 6/28/21
// Time: O(n) | Space: O(1)
function validStartingCity(distances, fuel, mpg) {
  let minGasCityIdx = 0;
  let minGas = 0;
  let startingGas = 0;
  for (let i = 0; i < distances.length; ++i) {
    startingGas += fuel[i] * mpg;
    startingGas = startingGas - distances[i];
    if (startingGas < minGas) {
      minGasCityIdx = i + 1;
      minGas = startingGas;
    }
  }
  return minGasCityIdx;
}

const test = {
  // distances: [5, 25, 15, 10, 15],
  // fuel: [1, 2, 1, 0, 3],
  // mpg: 10,
  // distances: [10, 10, 10, 10],
  // fuel: [1, 2, 3, 4],
  // mpg: 4,
  // distances: [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
  // fuel: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // mpg: 25,
};
const res = validStartingCity(test.distances, test.fuel, test.mpg);
console.log(res);

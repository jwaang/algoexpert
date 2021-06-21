// 6/20/21
// Time: O(n^2) | Space: O(n)
// Naive solution
function arrayOfProducts(array) {
  let res = [];
  for (let i = 0; i < array.length; ++i) {
    let product = 1;
    for (let j = 0; j < array.length; ++j) {
      if (i != j) {
        product *= array[j];
      }
    }
    res.push(product);
  }
  return res;
}

// 6/20/21
// Time: O(n) | Space: O(n)
// had to look at solution
function arrayOfProducts(array) {
  let products = new Array(array.length).fill(1);
  let leftProd = new Array(array.length).fill(1);
  let rightProd = new Array(array.length).fill(1);

  let currLeftProd = 1;
  for (let i = 0; i < array.length; ++i) {
    leftProd[i] = currLeftProd;
    currLeftProd *= array[i];
  }

  let currRightProd = 1;
  for (let i = array.length - 1; i > -1; --i) {
    rightProd[i] = currRightProd;
    currRightProd *= array[i];
  }

  for (let i = 0; i < array.length; ++i) {
    products[i] = leftProd[i] * rightProd[i];
  }

  return products;
}

const test = {
  array: [5, 1, 4, 2],
};

const res = arrayOfProducts(test.array);
console.log(res);

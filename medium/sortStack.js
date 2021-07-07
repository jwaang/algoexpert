// 7/7/21
// Time: O(n^2) | Space: O(n)
// looked at solution
function sortStack(stack) {
  if (stack.length === 0) return stack;
  const top = stack.pop();
  sortStack(stack);
  insert(stack, top);
  return stack;
}

function insert(stack, value) {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }
  const top = stack.pop();
  insert(stack, value);
  stack.push(top);
}

const test = {
  stack: [-5, 2, -2, 4, 3, 1],
};
console.log(sortStack(test.stack));

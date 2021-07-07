// 7/7/21
// Time: O(n) | Space: O(n)
function balancedBrackets(string) {
  let stack = [];
  for (const bracket of string) {
    if (bracket === "(") stack.push("(");
    else if (bracket === "[") stack.push("[");
    else if (bracket === "{") stack.push("{");
    else if (bracket === ")" && !checkPopped(stack, "(")) return false;
    else if (bracket === "]" && !checkPopped(stack, "[")) return false;
    else if (bracket === "}" && !checkPopped(stack, "{")) return false;
  }
  return stack.length === 0;
}

function checkPopped(stack, bracket) {
  const popped = stack.pop();
  if (popped !== bracket || !popped) return false;
  return true;
}

const test = {
  string: "([])(){}(())()()",
  // string: "()[]{}{",
  // string: "()()[{()})]",
  // string: "()[]{}{",
  // string: "{[[[[({(}))]]]]}",
};
console.log(balancedBrackets(test.string));

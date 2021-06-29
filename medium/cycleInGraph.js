// 6/25/21
// Time: O() | Space: O()
// looked at solution
function cycleInGraph(edges) {
  let visited = new Array(edges.length).fill(false);
  let stack = new Array(edges.length).fill(false);
  for (let v = 0; v < edges.length; ++v) {
    if (visited[v]) continue;
    const containsCycle = cycleInGraphHelper(v, edges, visited, stack);
    if (containsCycle) return true;
  }
  return false;
}

function cycleInGraphHelper(v, edges, visited, stack) {
  visited[v] = true;
  stack[v] = true;

  const neighbors = edges[v];
  for (const n of neighbors) {
    if (!visited[n]) {
      const containsCycle = cycleInGraphHelper(n, edges, visited, stack);
      if (containsCycle) return true;
    } else if (stack[n]) {
      return true;
    }
  }

  stack[v] = false;
  return false;
}

const test = {
  // edges: [[1, 3], [2, 3, 4], [0], [], [2, 5], []],
  edges: [[1, 2], [2], []],
};

const res = cycleInGraph(test.edges);
console.log(res);

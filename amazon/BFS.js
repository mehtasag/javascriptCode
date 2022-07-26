// Complexity
// Space: O(n)
// Time:  O(n)
// Queue Data Structure However DFS USES STACKS

const bfs = (root) => {
  if (root === null) return [];

  const values = [];

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.pop();
    values.push(current.val);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return values;
};

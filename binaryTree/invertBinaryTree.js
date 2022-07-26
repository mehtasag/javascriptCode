const inverr = (root) => {
  dfs(root);

  return root;
};

const dfs = (node) => {
  if (!node) return null;

  let temp = node.left;

  node.left = node.right;
  node.right = temp;
  dfs(node.left);
  dfs(node.right);
};

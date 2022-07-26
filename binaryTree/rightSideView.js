const rightSideView = (root) => {
  let res = [];

  const traverse = (node, depth) => {
    if (!node) return;

    if (!res[depth]) {
      res[depth] = node.val;
    }
    traverse(node.right, depth + 1);
    traverse(node.left, depth + 1);
  };

  traverse(root, 0);
  return res;
};

console.log(rightSideView());

// Time: O(n);
// Complexity:O(n)

const binarySum = (root) => {
  if (root === null) return 0;

  return root.val + binarySum(root.left) + binarySum(root.right);
};

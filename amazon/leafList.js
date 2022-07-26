// Print All leafs of an BinaryTree node using DFS APPROACH

//           A                    output using DFS APPROACH = ["G","K","I","F"]
//          /  \                                BFS Aprroach = ["F","G","I","K"]
//         B     C
//        /  \     \
//       D    E     F
//        \    / \
//         G   H  I
//               \
//                K
//
//

const leafList = (root) => {
  if (root === null) return [];
  const result = [root];

  const leaves = [];

  while (result.length > 0) {
    const current = result.pop();

    if (current.left === null && current.right === null)
      leaves.push(current.val);

    if (current.right !== null) result.push(current.right);

    if (current.left !== null) result.push(current.left);
  }
  return leaves;
};

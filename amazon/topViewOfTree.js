class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
const topViewOfTree = (root) => {
  const queue = [root];
  let result = [];
  if (queue === null) return [];
  if (queue.length > 0) result.push(queue.val);
  if (queue.left !== null) result.push(queue.val);
  console.log(result);
  return topViewOfTree(queue.val);
};

console.log(topViewOfTree(a));

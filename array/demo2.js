class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");

const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const listLinkedList = (head) => {
  let arr = [];
  let current = head;
  if (head === null) return;
  // console.log(head);
  // console.log(head.val);

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
    arr.push(head.val);
    console.log(arr);
  }
  listLinkedList(head);
};

console.log(listLinkedList(a));

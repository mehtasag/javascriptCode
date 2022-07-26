const edges = [
  ["A", "B"],

  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

const isConnected = (node1, node2) => {
  return edges.some((edge) => {
    return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
  });

  
};

console.log(isConnected("B", "A"));

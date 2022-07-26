// To get a possible node connected to other in Graph

const edges = [
  ["A", "B"],

  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

const findAdjacentNodes = (node) => {
  const adjacentNodes = [];

  for (let edge of edges) {
    const nodeIdx = edge.indexOf(node);
    if (nodeIdx > -1) {
      let adjacentNode = nodeIdx === 0 ? edge[1] : edge[0];
      adjacentNodes.push(adjacentNode);
    }
  }

  return adjacentNodes;
};

console.log(findAdjacentNodes("C"));

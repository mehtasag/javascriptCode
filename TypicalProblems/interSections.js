
// Code to find common arrays
const interSections = (a, b) => {
  const result = [];
  const items = new Set();
  for (let item of a) {
    items.add(item.id);
  }

  for (let ele of b) {
    if (items.has(ele.id)) {
      result.push(ele);
    }
  }
  return result;
};

console.log(
  interSections(
    [
      {
        id: 1,
        name: "Sagar mehta",
      },
      {
        id: 2,
        name: "ASagar mehta",
      },
      {
        id: 3,
        name: "Ssagar mehta",
      },
    ],
    [
      {
        id: 11,
        name: "Sagar mehta",
      },
      {
        id: 22,
        name: "ASagar mehta",
      },
      {
        id: 3,
        name: "Ssagar mehta",
      },
    ]
  )
);

const data = [11, 18, 12, 29, 1, 3, 5, 7, 9, 11];

// Find Lowest Number
const min = Math.min(...data);
// console.log(min);

const lastTwoLowest = data.sort((a, b) => a - b).slice(0, 2);

console.log(lastTwoLowest);

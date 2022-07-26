// var subsets = function (nums) {
//   const result = [];

//   function dfs(n, s, curr) {
//     if (curr.length === n) {
//       result.push([...curr]);
//       return;
//     }
//     for (let i = s; i < nums.length; i++) {
//       curr.push(nums[i]);
//       dfs(n, i + 1, curr);
//       curr.pop();
//     }
//   }

//   for (let j = 0; j <= nums.length; j++) {
//     dfs(j, 0, []);
//   }

//   return result;
// };
// console.log(subsets([1, 2, 3]));

const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const first = elements[0];

  const subsetWithOutFirst = subsets(elements.slice(1));

  const subsetWithFirst = [];

  for (let sub of subsetWithOutFirst) {
    subsetWithFirst.push([first, ...sub]);
  }

  return [...subsetWithFirst, ...subsetWithOutFirst];
};

console.log(subsets([1, 2, 3]));

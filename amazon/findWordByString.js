// const findWord = (queries) => {
//   let resultArr = [];
//   let i = 0;

//   while (queries.length !== 0) {
//     if (queries[0].includes("add")) {
//       // resultArr.push()
//       const qname = queries[0].substring(queries[0].indexOf(" "));
//       resultArr.push(qname);
//       break;
//     }
//   }
//   return resultArr;
// };

// console.log(findWord(["add hack", "add hackerrank", "find hac", "find hak"]));

const maxValue = (nums) => {
  let max = 0;
  for (let num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

console.log(maxValue([312, 3, 5, 1, 12, 313]));

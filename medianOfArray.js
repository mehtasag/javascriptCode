// // Median of Two Sorted Arrays - There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). You may assume nums1 and nums2 cannot be both empty.

const median = (a1, a2) => {
  let x = a1.concat(a2);

  x.sort((a, b) => a - b);

  let len = x.length;
  return len % 2 === 0
    ? (x[Math.floor(len / 2) - 1] + x[Math.floor(len / 2)]) / 2
    : x[Math.floor(len / 2)];
};

let a = [0, 2, 3, 5, 9];
let b = [1, 4];
console.log(median(a, b).toFixed(1));

const sumArray = (arr) => {
  total = 0;
  // for (i in arr) {
  //   total += arr[i];
  // }
  const totalValues = arr.reduce((prv, curr) => prv + curr, 0);
  // return total / arr.length;
  return totalValues / arr.length;
};

console.log(sumArray([""]));

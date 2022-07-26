// Use this method to find sum of two numbers from an array

const findPair = (arr, targetSum) => {
  let leftPointer = 0,
    rightPointer = arr.length - 1,
    pair = null;

  while (leftPointer != rightPointer) {
    pairSum = arr[leftPointer] + arr[rightPointer];
    if (pairSum === targetSum) {
      pair = [arr[leftPointer], arr[rightPointer]];
      break;
    } else if (pairSum < targetSum) {
      leftPointer++;
    } else if (pairSum > targetSum) {
      rightPointer--;
    }
  }
  return pair;
};

console.log(findPair([2, 4, 1, 3, 5, 7], 12));

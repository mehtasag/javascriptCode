const nonAdjacent = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i >= nums.length) return 0;

  const include = nums[i] + nonAdjacent(nums, i + 2, memo);

  const exclude = nonAdjacent(nums, i + 1, memo);

  memo[i] = Math.max(include, exclude);

  return memo[i];
};

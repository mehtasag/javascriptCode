const minChange = (n, k) => {
  let result = [];

  const dfs = (index, current) => {
    if (current.length === k) {
      result.push([...current]);
    }
    for (let i = index; i <= n; i++) {
      current.push(i);

      dfs(i + 1, current);
      current.pop();
    }
  };
  dfs(0, []);
  return result;
};

console.log(minChange(4, 3));

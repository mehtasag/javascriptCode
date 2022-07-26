const isDivisible = (n, x, y) => {
  //   return (n % x && n % y) === 0 ? true : false;
  return !(n % x || n % y);
};

console.log(isDivisible(12, 3, 2));

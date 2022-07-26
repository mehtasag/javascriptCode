const findOdd = (arr) => {
  //   arr.forEach((number) => {
  //     if (number % 2 !== 0) {
  //       odds.push(number);
  //     }
  //   });

  let odds = arr.filter(
    (number) => number % 2 !== 1
  ); /*TO FIND ODD number % 2 !==0  */
  return odds;
};

console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

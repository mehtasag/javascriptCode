const allStars = (num) => {
  let string = "";
  for (let i = 1; i <= num; i++) {
    // printing star
    for (let k = 1; k <= num; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};

console.log(allStars(5));

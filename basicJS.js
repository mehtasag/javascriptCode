// To get a total of an array, we need to

const sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log("Args:", args);
  return sum;
};

// console.log(sum(4, 5, 6, 7, 8));

// Function to return boolean value if B is in A; it's required two Strings

const stringIncludes = (str1, str2) => {
  let str3 = str1.toLowerCase();

  return str3.includes(str2.toLowerCase());
};

console.log(stringIncludes("Sagar is a", "a "));

// Function for get a object key if it exists

const getNames = (array) => {
  let result = [];

  result = array.map((data) => data.name);
  return result.filter((name) => name !== undefined);
};

console.log(
  getNames([
    { id: 1, name: "Sagar" },
    { id: 2, age: 30 },
    { id: 3, name: "Mehta" },
    { name: "Vani" },
  ])
);

// console.log(typeof undefined);

const zap = (n) => {
  if (n < 1) return;
  console.log(n);
  zap(n - 2);
};

console.log(zap(10));

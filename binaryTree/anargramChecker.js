// Two words char are interchangeble and create a new word with same string size and

const anargramChecker = (str1, str2) => {
  if (str1 === null || str2 === null) return null;

  let string1 = str1
    .trim()
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let string2 = str2
    .trim()
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  if (string1 === string2) return true;
  else return false;
};

console.log(anargramChecker("restfull", "flluster"));

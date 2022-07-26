// Split a Number into an Array

// Array.from Can Convert Array of Numbers in to Array of Strings [1,2,3] => ['1','2','3'] using 
// "String" of "Number"

const number = "123";

const artofDigits = Array.from(String(number));

console.log(artofDigits);

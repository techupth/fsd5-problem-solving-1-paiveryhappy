//Exercise 1: Add Strings

const addStrings = function (num1, num2) {
  let sum = 0;
  sum = Number(num1) + Number(num2);
  return sum;
};

const result1 = addStrings("11", "123");
const result2 = addStrings("456", "77");
const result3 = addStrings("0", "0");

console.log(result1); // "134"
console.log(result2); // "533"
console.log(result3); // "0"

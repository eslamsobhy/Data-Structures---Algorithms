// Craete a function that reverses a string
// "Hi my name is eslam" should be:
// "malse si eman ym iH";

const reverseString = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

console.log(reverseString("Hi my name is eslam!"));
console.log(reverseString("1234"));

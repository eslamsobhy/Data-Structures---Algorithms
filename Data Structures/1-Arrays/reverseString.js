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

// converting the string to an array to make use of its built in methods
const reverse2 = (str) => {
  // error checks
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmmm, not a good input actually!";
  }

  const backWard = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backWard.push(str[i]);
  }

  return backWard.join(""); // converting it back to a string
};

console.log(reverseString("Hi my name is eslam!"));
console.log(reverse2("Hi my name is eslam!"));

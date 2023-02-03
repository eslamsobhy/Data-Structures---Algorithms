/*
    Given two arrays, create a function that lets a user know (true/false)
    whether these two arrays contain any commom items?

    For example:
    array1 = ["a", "b", "c", "x"]
    array2 = ["y", "z", "i"];
    should return false

    array1 = ["a", "b", "c", "x"]
    array2 = ["y", "z", "x"];
    should return true
*/

// two parameters as inputs (arrays with no size limit)
// gonna return true or false

// The easy naive solution: O(n^2) you do not have to code, you can just talk about it!

const firstArr = ["a", "b", "c", "x"];
const secondArr = ["y", "z", "x"];

const isThereCommonItems = (arr1, arr2) => {
  let flag = false;
  arr1.forEach((item1) => {
    arr2.forEach((item2) => {
      if (item1 === item2) {
        flag = true;
      }
    });
  });
  return flag;
};

console.log(isThereCommonItems(firstArr, secondArr));

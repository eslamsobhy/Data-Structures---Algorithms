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

// The easy naive solution: O(n*m) you do not have to code, you can just talk about it!
// It has a space complexity of O(1)

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

// Another way of doing it:
/*
    There is a common pattern that is used in order to optimize the ou solution:
    - convert the first array into an object like this:
    obj = {
        a: true,
        b: true,
        c: true,
        x: true,
    }
    - then we check if the item in the second array is a property inside of the object:
    secondArr[index] === obj.properties??
*/

// It has a spcae complexity of O(n)

const containsCommonItems = (arr1, arr2) => {
  /*
    Loop through the first array and create an object
    whose properties are the array items...
  */
  let map = {};
  arr1.forEach((item) => {
    if (!map[item]) {
      map[item] = true; // map={whatever_item: true}
    }
  });

  /*
    Loop through the second array and check if the items
    inside of it exists in the created objects...
  */
  let flag = false;
  arr2.forEach((item) => {
    if (map[item]) {
      flag = true;
    }
  });

  return flag;
};

console.log(containsCommonItems(firstArr, secondArr)); // O(n + m) which is much faster - Linear

/*
    - Sometimes there are some solutions using language specific methods,
      like this one here!
    - Any language community developers just make sure that their built in 
      functions are the fastest!
    - May be they are using the same algorithm you just implemented (the map one),
      and provide it so that you don't have to write these methods over and over again!
*/

const containsCommonItems2 = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};

console.log(containsCommonItems2(firstArr, secondArr));

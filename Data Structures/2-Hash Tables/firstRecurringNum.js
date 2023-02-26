// Here is another version of the first recurring element problem

// Google question

// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// Should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// Should return 2

// Given an array = [1, 2, 3, 5]
// Should return undefined

// INPUT: an array
// OUTPUT: the first element to appear twice (first recurring element)
/*
    NOTE:
     the first occurrence of the element is the most important one, 
     in the previous version it wasn't!
*/

const firstRecurringChar = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
};

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arr3 = [1, 2, 3, 5];

console.log(firstRecurringChar(arr2));
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

// Naive implementation => O(n^2)
// space complexity => O(1)
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

// O(n) much faster!
// Space complexity => O(n)
// meets the last version requirements
// But doesn't meet this version's requirements!!
const firstRecurringChar2 = (array) => {
  // use the built in hash table
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return array[i];
    }
    map[array[i]] = true;
  }
  return undefined;
};

// This approach meets this version's requirements => O(n)
// space complexity => O(n)
// Note that in order for you to come with a faster algoritms,
// you needed to increase the space complexity!
const firstRecurringChar3 = (array) => {
  // using the built-in hash table
  const map = {};

  // array of repeated elements
  const repeated = [];

  // filling the hash-table with the array's elements indices
  // time-complexity => O(n)
  // space-complexity => O(n)
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      map[array[i]].push(i);
    } else {
      map[array[i]] = [i];
    }
  }

  // filling the array of repeated elements
  // time-complexity => O(m)
  // space-complexity => O(m)
  for (const num in map) {
    if (map[num].length > 1) {
      let numData = { num, firstOccurance: map[num][0] };
      repeated.push(numData);
    }
  }

  // Determining the element that appeard first and then repeated
  // time-complexity => O(x)
  // space-complexity => O(1)
  let firstRecurring = repeated[0];
  for (let i = 1; i < repeated.length; i++) {
    if (repeated[i].firstOccurance < firstRecurring.firstOccurance) {
      firstRecurring = repeated[i];
    }
  }

  // checking if there were no repeated elements in the input array
  if (firstRecurring) {
    return firstRecurring.num;
  }

  return undefined;
};

// to sum the time&space complexity
// time-complexity => O(n) + O(m) + O(x) => Linear instead of quadratic in the prev code version
// space-complexity => O(n) + O(m) + O(1) => Linear instead of constant in the prev code version

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arr3 = [1, 2, 3, 5];

// console.log(firstRecurringChar(arr2));
// console.log(firstRecurringChar2(arr2));

console.log("new function returns: ", firstRecurringChar3(arr3));

// What is Good code?
// 1. Readable
// 2. Scalable

// Scalability:
// - SPEED (time-operations) [Time Complexity]
// - MEMORY (Space Complexity)

/* 
    Usually programs whith high speed, uses a lot of memory,
    and programs use less memory is slow!
    So sometimes you need to sacrifice somthing!
*/

// SPACE COMPLEXITY:

/*
    When the program has to remeber thing; it has two things:
    - The Heap. (is usually where we store variables)
    - The Stack. (is usually where we keep track of our function calls)

    What causes space complexity?
    - variables
    - data structures
    - function calls
    - allocations
*/

// Examples of calculating the space complexity:

const boooo = (n) => {
  // i = 0 O(1)
  for (let i = 0; i < n.length; i++) {
    console.log("booooo!");
  }
};

boooo([1, 2, 3, 4, 5]); // space complexity: O(1)

const arrayOfHiNTimes = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = "Hi!";
  }
  return arr;
};

console.log(arrayOfHiNTimes(5)); // O(1) + O(1) + O(n) === O(n)

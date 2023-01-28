const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const grabFirstBox = (arr) => {
  console.log(arr[0]);
};

const grabFirstTwoBoxes = (arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
};

grabFirstBox(boxes); // O(1) --> Constatnt Time

grabFirstTwoBoxes(boxes); // O(2) --> STILL Constant Time

// Write a function that will log all the pairs of this array, what is the complexity of it!?

const letters = ["a", "b", "c", "d", "e"];

const logAllpairs = (arr) => {
  arr.forEach((letter1) => {
    arr.forEach((letter2) => {
      console.log(letter1, letter2);
    });
  });
};

logAllpairs(letters); // O(n * n) === O(n^2) --> quadratic time

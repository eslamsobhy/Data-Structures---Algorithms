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

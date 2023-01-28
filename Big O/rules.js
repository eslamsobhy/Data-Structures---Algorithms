// Rules to calculate the Big O Notation

// 1. Worst case

const everyone = [
  "nemo",
  "dory",
  "bruce",
  "marlin",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const findNemo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("Run # " + (i + 1));
    if (arr[i] === "nemo") {
      console.log("Found Nemo!");
      break;
    }
  }
};

findNemo(everyone); // O(n) --> Linear time

// It doesn't matter if we found nemo at the beginnig of our search or at the end of it!!
// Big(O) will always treat it as it ran the worst case (at the end, or not even there!)
// It will always has a Big O(n), no matter where did we find it!

// 2. Remove (Drop) constants

const printFirstItemAndHalfOfTheItemsAndHi100Times = (items) => {
  console.log(items[0]);

  const mid = Math.floor(items.length / 2);
  let index = 0;

  while (index < mid) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi");
  }
};

printFirstItemAndHalfOfTheItemsAndHi100Times(everyone); // O(n)

// O(1 + n/2 + 100) == O(n/2 + 101) == O(n/2) == O(n)
// When the array gets bigger and bigger those 101 steps or even million of steps become very small to care about, so we neglect them!
// Even dividing by 2 becomes not really important to care about!
// So dividing, adding, multiplying, or subtracting (is there any!? :)!) are not considered while calculating!

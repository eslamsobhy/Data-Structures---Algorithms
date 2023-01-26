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

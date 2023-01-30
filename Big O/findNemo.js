const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const largeArr = new Array(1000).fill("nemo");

const findNemo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
};
// This function gets slower depending on the size of the array!
// Of course don't forget that it also depends on the power of the CPU of your computer,
//      the programming languages you are using,
//      what other programs you are running?,
//      and a lot more factors...
// So how do we actually decide whether the code is good or not!?
// That's where the Big O notation comes to place!

// The most important question is:
// How much the our program gets slower when increasing the input size??

findNemo(everyone); // O(n) --> Linear Time
// for the nemo array => O(1)
// for the everyone array => O(10)
// for the largeArr array => O(1000)

const findNemo2 = (arr) => {
  arr.forEach((fish) => {
    if (fish === "nemo") {
      console.log("Found Nemo!");
    }
  });
};

const findNemo3 = (arr) => {
  for (let fish of arr) {
    if (fish === "nemo") {
      console.log("Found Nemo!");
    }
  }
};

findNemo2(everyone);
findNemo3(everyone);

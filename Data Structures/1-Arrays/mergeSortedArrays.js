// input: two sorted arrays => [0, 3, 4, 31], [4, 6, 30]
// output: one array combining the two arrays and still sorted

// let's think naively:
const mergeSortedArrays = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    second: for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] >= arr2[i]) {
        arr1.splice(j, 0, arr2[i]);
        break second;
      } else if (j === arr1.length - 1) {
        arr1.push(arr2[i]);
        break second;
      }
    }
  }

  return arr1;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [40, 6, 30]));

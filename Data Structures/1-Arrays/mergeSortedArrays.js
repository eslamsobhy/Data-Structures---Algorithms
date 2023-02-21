// input: two sorted arrays => [0, 3, 4, 31], [4, 6, 30]
// output: one array combining the two arrays and still sorted

// let's think naively: O(n * m)
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

// Faster way: O(n + m)
const mergeSortedArrays2 = (arr1, arr2) => {
  // to be used variables:
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  let i = 1;
  let j = 1;

  // checking inputs:
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  // merging the two arrays
  while (mergedArray.length !== arr1.length + arr2.length) {
    if (arr1Item > arr2Item) {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    } else {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    }
  }
  return mergedArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [40, 6, 30]));
console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30])); //there is a bug that needs to be fixed

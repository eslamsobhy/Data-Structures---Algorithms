/*
    The problem: given an array of numbers and an integer;
    Could you find a pair in the array that sum up to the number given?!
*/

const sample1 = [1, 2, 3, 9];
const sample2 = [1, 2, 4, 4];
const sum = 8;

let answer = {
  status: false,
  pair: [],
};

// The naive soln:
const checkPair = (arr, s) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === s) {
        answer.status = true;
        answer.pair.push(arr[i]);
        answer.pair.push(arr[j]);
        return answer;
      }
    }
  }
  return answer;
};

console.log(checkPair(sample2, sum)); //O(n^2) quadratic (slow)

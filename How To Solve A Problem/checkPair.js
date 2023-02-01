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

let answerFast = {
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

/*
    In this solution we assume that the array is sorted!
    if not sorted, we sort it; then it wil have a O(n*log n)
*/

// Faster soln:
const checkPairFast = (arr, s) => {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let sum = arr[low] + arr[high];
    // FOUND!
    if (sum === s) {
      answerFast.status = true;
      answerFast.pair.push(arr[low]);
      answerFast.pair.push(arr[high]);
      return answerFast;
    }
    // we need to go lower
    if (sum > s) {
      high--;
    }
    // we need to go higher
    if (sum < s) {
      low++;
    }
  }
  return answerFast;
};

console.log(checkPair(sample2, sum)); //O(n^2) quadratic (slow)
console.log(checkPairFast(sample1, sum)); //O(n) linear (fast)

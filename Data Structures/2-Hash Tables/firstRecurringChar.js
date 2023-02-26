// Google question

// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// Should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// Should return 1

// Given an array = [1, 2, 3, 5]
// Should return undefined

// INPUT: an array
// OUTPUT: the first element to appear for the second time (first recurring element)

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //   hash function => O(1)
  _hash(key) {
    let hash = 0;
    /*
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    */
    // customized the hash function to be more suitable for our key
    hash = key.toString().charCodeAt(0) % this.data.length;
    return hash;
  }

  //   filling the hash table with the array elements => O(n)
  fillHashTable(arr) {
    for (let i = 0; i < arr.length; i++) {
      let index = this._hash(arr[i]);
      if (this.data[index]) {
        if (this.data[index].secondOccur) {
          continue;
        } else {
          this.data[index].secondOccur = i;
        }
      } else {
        this.data[index] = { num: arr[i], firstOccur: i };
      }
    }
  }

  //   the number with the minimum distance between its first and second occurrences
  _min(array) {
    let min = array[0];
    array.forEach((element) => {
      if (element.c < min.c) {
        min = element;
      }
    });
    return min;
  }

  //   first recurring element => O(n * m)
  firstRecurringElement() {
    const recurring = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].secondOccur) {
        let indexCount = 0;
        for (
          let j = this.data[i].firstOccur;
          j <= this.data[i].secondOccur;
          j++
        ) {
          indexCount += j;
        }
        let obj = { num: this.data[i].num, c: indexCount };
        recurring.push(obj);
      }
    }
    return this._min(recurring);
  }

  // faster soln => O(n)!!!!
  firstRecurringElementOptimized(arr) {
    for (let i = 0; i < arr.length; i++) {
      let index = this._hash(arr[i]);
      if (this.data[index]) {
        return arr[i];
      }
      this.data[index] = arr[i];
    }
    return undefined;
  }
}

const arr1 = [2, 1, 1, 2, 3, 5, 1, 2, 4, 5]; // 1
const arr2 = [2, 5, 1, 2, 3, 5, 1, 2, 4]; // 2
const arr3 = [1, 2, 3, 5]; // undefined

const hashObj1 = new HashTable(20);
const hashObj2 = new HashTable(20);
const hashObj3 = new HashTable(20);

hashObj1.fillHashTable(arr1);
hashObj2.fillHashTable(arr2);
hashObj3.fillHashTable(arr3);

console.log(hashObj1.firstRecurringElement());
console.log(hashObj2.firstRecurringElement());
console.log(hashObj3.firstRecurringElement());

// testing the optimized version
const obj1 = new HashTable(20);
const obj2 = new HashTable(20);
const obj3 = new HashTable(20);

console.log(obj1.firstRecurringElementOptimized(arr1));
console.log(obj2.firstRecurringElementOptimized(arr2));
console.log(obj3.firstRecurringElementOptimized(arr3));

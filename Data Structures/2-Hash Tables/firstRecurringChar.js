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
}

const arr1 = [2, 1, 1, 2, 3, 5, 1, 2, 4, 5];

const hashObj = new HashTable(20);
hashObj.fillHashTable(arr1);
console.log(hashObj);

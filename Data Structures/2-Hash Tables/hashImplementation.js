class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // adding to the hash table
  set(key, value) {
    const index = this._hash(key); // Getting the address
    const obj = { k: key, v: value }; // Creating an object with the data provided
    // Check if there are no elements at that address
    if (!this.data[index]) {
      this.data[index] = new Array();
    }
    this.data[index].push(obj);
    return this.data[index];
  }

  // DON'T FORGET: UP UNTILL NOW WE DIDN'T HANDLE COLLISIONS YET!!
  // lookups
  get(key) {
    const index = this._hash(key);
    const item = this.data[index];
    if (item) {
      return item[0];
    } else {
      return "!!OOPS NOT";
    }
  }
}

const hashObj = new HashTable(50);
hashObj.set("grapes", 1000);
hashObj.set("grapes", 430);
hashObj.set("grapes", 100);
hashObj.set("apples", 430);

// console.log(hashObj.get("grape"), "FOUND!!");
// console.log(hashObj.get("grapes"), "FOUND!!");
console.log(hashObj);

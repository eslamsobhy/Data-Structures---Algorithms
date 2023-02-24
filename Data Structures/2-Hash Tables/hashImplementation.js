class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // hash function
  // O(1) we are just looping over the key which is too fast
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // adding to the hash table
  // O(1) just pushing
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

  // lookups
  // O(1) with a good hash function and no collisions
  // O(n) with collisions and not so good hash function
  get(key) {
    const index = this._hash(key);
    const items = this.data[index];
    if (items) {
      // Note: using filter() will bring back all the items with that key,
      // while using find() will bring back the first match!
      const item = items.find((element) => element.k === key);
      return item;
    } else {
      return "!!OOPS NOT FOUND!!";
    }
  }

  // O(n * m) with collisions this is very slow!
  keys() {
    const keys = [];
    this.data.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((item) => keys.push(item.k));
      }
    });
    return keys;
  }

  // O(n * m) with collisions this is so slow
  valuesCount() {
    let count = 0;
    this.data.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((item) => (count += item.v));
      }
    });
    return count;
  }
}

const hashObj = new HashTable(50);
hashObj.set("grapes", 1000);
hashObj.set("grapes", 430);
hashObj.set("grapes", 100);
hashObj.set("apples", 430);
hashObj.set("oranges", 200);

console.log(hashObj.get("apples"));
console.log(hashObj.get("grapes"));
console.log(hashObj);

console.log(hashObj.keys());
console.log(hashObj.valuesCount());

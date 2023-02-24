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
    const index = this._hash(key);
    this.data[index] = new Array();
    const obj = { k: key, v: value };
    this.data[index].push(obj);
    return this.data[index];
  }
}

const hashObj = new HashTable(50);
console.log(hashObj._hash("grabes"));
console.log(hashObj.set("grabes", 1000));
console.log(hashObj.set("grabes", 100));
console.log(hashObj.set("grabes", 200));
console.log(hashObj._hash("apples"));
console.log(hashObj.set("apples", 430));
console.log(hashObj);

/*
    

*/

class Arrayy {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    console.log(this.data[index]);
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new Arrayy();
arr.push("Hi");
arr.push("there");
arr.push("hola");
arr.push("Mohamed");
arr.push("is");
arr.push("How");
arr.push("Are");
arr.push("Asafdasre");
arr.push("You");

arr.delete(2);
arr.delete(3);
arr.delete(5);

console.log(arr);

class Stack {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    if (this.array.length === 0) {
      return true;
    }
    return false;
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    return this.array.pop();
  }
}

const myStack = new Stack();

console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("coursera"));
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.pop());
console.log(myStack.peek());

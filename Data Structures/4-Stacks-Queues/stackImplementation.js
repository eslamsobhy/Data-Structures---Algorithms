class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //   check if the stack is empty
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  //   add element to the stack
  push() {}

  //   remove element from the stack
  pop() {}

  //   gets the top element of the stack
  peek() {}
}

// instantiation
const myStack = new Stack();

// testing
console.log(myStack.isEmpty());

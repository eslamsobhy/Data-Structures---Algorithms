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
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.bottom = newNode;
    } else {
      this.top.next = newNode;
    }
    this.top = newNode;
    this.length++;
    return this;
  }

  //   remove element from the stack
  pop() {}

  //   gets the top element of the stack
  peek() {
    return this.top;
  }
}

// instantiation
const myStack = new Stack();

// testing
console.log(myStack.push(77));
console.log(myStack.peek());
console.log(myStack.push(88));
console.log(myStack.peek());
console.log(myStack.push(99));
console.log(myStack.peek());

console.log(myStack.isEmpty());

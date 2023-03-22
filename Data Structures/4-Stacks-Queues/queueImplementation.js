class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //   check if the queue is empty
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  //   return the first in the queue
  peek() {
    return this.first;
  }

  // add element to the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  //   remove element from the queue
  dequeue() {}
}

const myQueue = new Queue();

myQueue.enqueue("eslam");
myQueue.enqueue("mohamed");
myQueue.enqueue("ali");
console.log(myQueue);

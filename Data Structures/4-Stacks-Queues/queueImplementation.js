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
  isEmpty() {}

  //   return the first in the queue
  peek() {}

  // add element to the queue
  enqueue() {}

  //   remove element from the queue
  dequeue() {}
}

const myQueue = new Queue();

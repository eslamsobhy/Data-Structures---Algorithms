// 10 -> 5 -> 16

/*
const myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};
*/

// Creating the node structure separated
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head; // they both point to the same node
    this.length = 1;
  }

  append(value) {
    let p = this.tail;
    p.next = { value: value, next: null };
    this.tail = p.next;
    this.length += 1;
  }

  prepend(value) {
    let p = new Node(value);
    p.next = this.head;
    this.head = p;
    this.length += 1;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(77);
myLinkedList.prepend(1);

console.log(myLinkedList);

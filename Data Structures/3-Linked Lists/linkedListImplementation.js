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

// Creating the Node structure separated
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Our Linked List
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head; // they both point to the same node
    this.length = 1;
  }

  // Time complexity => O(1)
  append(value) {
    let newNode = new Node(value);
    let p = this.tail;
    this.tail = newNode;
    p.next = newNode;
    this.length += 1;
  }

  // Time complexity => O(1)
  prepend(value) {
    let p = new Node(value);
    p.next = this.head;
    this.head = p;
    this.length += 1;
  }

  displayList() {
    let currentNode = this.head;
    let listArray = [];
    while (currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }

  insert(index, value) {
    // checking params
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    } else {
      const newNode = new Node(value);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  remove(index) {
    // check parameter
    if (index < 0 || index >= this.length) {
      return "ERROR: The Provided Index Is Out Of Scope!";
    } else {
      let currentNode = this.head; // pointing to the first element
      // traverse until we get to the element before the target one
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      // skipping the target one
      currentNode.next = currentNode.next.next;
      this.length--;
    }
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(77);
myLinkedList.prepend(1);

myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.insert(0, 77);
myLinkedList.insert(1, 66);

myLinkedList.remove(2);
myLinkedList.remove(1);
myLinkedList.remove(0);
myLinkedList.remove(20);

console.log(myLinkedList.displayList());

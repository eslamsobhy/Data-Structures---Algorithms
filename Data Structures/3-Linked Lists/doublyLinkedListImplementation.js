// Creating the Node structure separated
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Our Doubly Linked List
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head; // they both point to the same node
    this.length = 1;
  }

  // Time complexity => O(1)
  append(value) {
    let newNode = new Node(value);
    newNode.prev = this.tail;
    let p = this.tail;
    this.tail = newNode;
    p.next = newNode;
    this.length += 1;
  }

  // Time complexity => O(1)
  prepend(value) {
    let newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  // Time complexity => O(n)
  displayList() {
    let currentNode = this.head;
    let listArray = [];
    while (currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }

  // Time complexity => O(n)
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
      newNode.next.prev = newNode; // DON'T Forget; you need to handle the prev of the follower too
      newNode.prev = current;
      current.next = newNode;
      this.length++;
    }
  }

  // Time complexity => O(n)
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
      currentNode.next.prev = currentNode;
      this.length--;
    }
  }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(77);
myLinkedList.prepend(1);

myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.insert(0, 77);
// myLinkedList.insert(1, 66);

myLinkedList.remove(2);
console.log(myLinkedList);
// myLinkedList.remove(1);
// myLinkedList.remove(0);
// myLinkedList.remove(20);

console.log(myLinkedList.displayList());

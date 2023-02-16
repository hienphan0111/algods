// Optionally: start with your code from LinkedList challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor(head = null) {
    this.head = head;
  }  

  add(number) {
    // your code here
    if (this.head === null) {
      this.head = new Node(number);
      return;
    }
    let current = this.head;
    while (current.next_node !== null) {
      current = current.next_node;
    }
    current.next_node = new Node(number);
  }

  get(index) {
    // your code here
    let node = this.head;
    if(index === 0) {
      return this.head.value;
    }

    while(index--){
      if(node.next_node !== null){
        node = node.next_node;
      }
    }
    return node.value;
  }

  addAt(index, item) {
    let node = this.head;
    if(index === 0) {
      this.head = new Node(item);
      this.head.next_node = node;
      return;
    }
    let pre = node;
    while(index--) {
      if(node.next_node !== null) {
        pre = node;
        node = node.next_node; 
      }
    }
    pre.next_node = new Node(item);
    pre.next_node.next_node = node;
  }

  remove(index) {
    let node = this.head;
    if(index === 0) {
      if(node.next_node !== null) {
        this.head = node.next_node;
      } else {
        this.head = null;
      }
    } 
    let pre = node;
    while(index--) {
      if(node.next_node !== null) {
        pre = node;
        node = node.next_node;
      }
    }
    pre.next_node = node.next_node;
    
  }
}

class Stack {
  constructor() {
    this.stack = new LinkedList;
    this.size = 0;
  }

  push(number) {
    // your code here
    this.stack.add(number);
    this.size ++;
  }
  
  pop() {
    // your code here
    if(this.size <= 0) {
      return -1
    } else {
      const result = this.stack.get(this.size);
      this.stack.remove(this.size);
      this.size--;
      return result;
    }
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5

stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7

console.log(stack.pop())
// => 2

console.log(stack.pop())
// => 3

module.exports = Stack

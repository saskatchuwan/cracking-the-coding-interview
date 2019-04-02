/*
Implement the MinStack class by storing the min val of the stack at the time of insertion
of a new node. Each node will hold a minOfStack value so that min() will be O(1).
*/

class MinStack {
  constructor() {
    this.array = [];
  }

  pop() {
    if (this.array.length === 0) {
      return null;
    } else {
      return this.array.pop();
    }
  }

  push(nodeItem) {
    if (this.array.length === 0) {
      nodeItem.minOfStack = nodeItem.val;
    } else {
      nodeItem.minOfStack = Math.min(this.array[this.array.length - 1].minOfStack, nodeItem.val);
    }

    return this.array.push(nodeItem);
  }

  min() {
    return this.array[this.array.length - 1].minOfStack;
  }

}

class Node {
  constructor(val) {
    this.val = val;
    this.minOfStack = null;
  }
}

/* Test */
let minStack = new MinStack();

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

minStack.push(node3);
minStack.push(node2);
minStack.push(node1);

console.log('Test 1');
console.log(minStack);
console.log(minStack.min(), 1);

console.log('Test 2');
minStack.pop(node1);
console.log(minStack);
console.log(minStack.min(), 2);
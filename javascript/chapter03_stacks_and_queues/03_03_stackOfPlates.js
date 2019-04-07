/*
n = size of set
k = length of each stack
Time:
  O(1) - push, pop
  O(n) - popAt

Space
  O(1) - pop
  O(k) - push
  O(n) - popAt
*/

class SetOfStacks {
  constructor() {
    this.set = [];
    this.stackMaxLength = 5;
  }

  push(el) {
    if (this.set.length === 0) {
      this.set = [[el]];
    } else {
      let lastStack = this.set[this.set.length - 1];

      if (lastStack.length + 1 <= this.stackMaxLength) {
        this.set[this.set.length - 1].push(el);
      } else {
        this.set.push([el]);
      }
    }
    return this.set[this.set.length - 1];
  }

  pop() {
    let popped = this.set[this.set.length - 1].pop();

    if (this.set[this.set.length - 1].length === 0) {
      this.set.pop(); //remove empty array
    }

    return popped;
  }

  //zero-indexed
  popAt(stackIdx) {
    if (stackIdx === this.set.length - 1) {
      this.pop();
    } else if (stackIdx < this.set.length - 1) {

      let queue = this.set.slice(stackIdx);
      let popped;
      let stackPos = stackIdx;

      while (queue.length) {
        let currStack = queue.shift();

        if (stackIdx === this.set.length - 1) {
          popped = this.pop();
        } else if (stackPos === stackIdx) {
          //pop from stack
          popped = currStack.pop();
          //replace with modified pop verion within set
          this.set[stackPos] = currStack;

        } else {
          //take bottom el of this stack
          let shiftedEl = currStack.shift();

          //set this modified stack
          this.set[stackPos] = currStack;
          //push the shiftedEl into the previous stack
          this.set[stackPos - 1].push(shiftedEl);
        }

        stackPos += 1;
      }

      return popped;

    } else { //else if greater than set length or less than 0 
      //throw error
    }
  }

}

/* Test */
let newStack = new SetOfStacks();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(5);
newStack.push(6);
newStack.push(7);
newStack.push(8);
newStack.push(9);
newStack.push(10);
newStack.push(11);
newStack.push(12);
newStack.push(13);
newStack.push(14);
newStack.push(15);
newStack.push(16);
newStack.push(17);
newStack.push(18);
newStack.push(19);
newStack.push(20);
// newStack.push(21);

console.log(newStack.set);

newStack.popAt(0);

console.log(newStack.set);

newStack.popAt(3);

console.log(newStack.set);
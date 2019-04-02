/*
Within a single array, we can implement 3 stacks by first placing the bottom items of each
stack at positions 0, 1, 2 (these indices will then serve as the stack number). Every
subsequent item to a stack will be 3 positions away from its previous item.

ex: 
  array:    [item1, item2, item3, item4, item5, item6, item7, item8, item9]
  indices:  0       1       2     3       4      5      6     7       8
  stack #:  0       1       2     0       1      2     0     1       2

  Time:
    Pop, Push, Peek, isEmpty, size - O(1)

  Space:
    Pop - O(n)
    Push, Peek, isEmpty, size - O(1)

*/


class TripleStack {
  constructor() {
    this.container = [];
    this.lengths = [0, 0, 0];
  }

  pop(stack) {
    const stackSize = this.size(stack);
    const topItemPos = stack + (stackSize - 1) * 3;

    const poppedItem = this.container[topItemPos];
    const left = this.container.slice(0, topItemPos);
    const right = this.container.slice(topItemPos + 1);

    this.container = left.concat(right);
    this.lengths[stack] -= 1;
    return poppedItem;
  }

  push(stack, item) {
    const stackSize = this.size(stack);
    const topItemPos = stack + (stackSize - 1) * 3;
    const newTopItemPos = topItemPos + 3;

    this.container[newTopItemPos] = item;
    this.lengths[stack] += 1;
    return this.container;
  }

  peek(stack) {
    const stackSize = this.size(stack);
    const topItemPos = stack + (stackSize - 1) * 3;

    return this.container[topItemPos];
  }

  isEmpty(stack) {
    return this.length[stack] === 0;
  }

  size(stack) {
    return this.lengths[stack];
  }
}
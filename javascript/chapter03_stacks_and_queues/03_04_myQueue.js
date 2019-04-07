class myQueue {
  constructor() {
    this.s1 = []; //front of array is oldest
    this.s2 = []; //front of array is newest
  }

  enqueue(el) {
    this.s1.push(el);
    return this.s1;
  }

  dequeue(el) {
    //reverse s1 and save as s2
    this.s2 = this.s1.reverse();
    //remove top (oldest)
    const removed = this.s2.pop();
    //reverse s2 and save as s1 (original order)
    this.s1 = this.s2.reverse();
    //reset s2
    this.s2 = [];
    //return removed
    return removed;
  }

  peek() {
    //reverse s1 and save as s2
    this.s2 = this.s1.reverse();
    const observed = this.s2[this.s2.length - 1];
    //reverse s2 and save as s1 (original order)
    this.s1 = this.s2.reverse();
    //reset s2
    this.s2 = [];
    //return observed
    return observed;
  }

  isEmpty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
 }


 let queue = new myQueue();
 queue.enqueue(0);
 queue.enqueue(1);
 queue.enqueue(2);
 queue.enqueue(3);
 queue.enqueue(4);

 console.log(queue);
 
 queue.dequeue();
 queue.dequeue();

 console.log(queue);

 console.log(queue.peek());

 console.log(queue);
/*
Utilize two queues - each one to store a level of nodes.

n = number of nodes
Time: O(n)
Space: O(n)
*/
function listOfDepths(rootNode) {
  let queue = [rootNode];
  let queueLength = queue.length;
  let nextQueue = [];
  let nextQueueLength;

  let traversingQueue = true;

  let list = [];
  let linkedList = null;

  while ( queue.length || nextQueue.length ) {

    if (traversingQueue) {
      if (queue[0].left) { nextQueue.push(queue[0].left); }
      if (queue[0].right) { nextQueue.push(queue[0].right); }
      nextQueueLength = nextQueue.length;

      let node = queue.shift();
      queueLength = queue.length;
  
      if (!linkedList) {
        linkedList = new Node(node.value);
      } else {
        let newNode = new Node(node.value);
        let currList = linkedList;
        newNode.next = currList;
        linkedList = newNode;
      }


      if (queueLength === 0) {
        list.push(linkedList);
        linkedList = null;
        traversingQueue = false;
      }

    } else {
      if (nextQueue[0].left) { queue.push(nextQueue[0].left); }
      if (nextQueue[0].right) { queue.push(nextQueue[0].right); }
      queueLength = queue.length;

      let node = nextQueue.shift();
      nextQueueLength = nextQueue.length;
  
      if (!linkedList) {
        linkedList = new Node(node.value);
      } else {
        let newNode = new Node(node.value);
        let currList = linkedList;
        newNode.next = currList;
        linkedList = newNode;
      }

      if (nextQueueLength === 0) {
        list.push(linkedList);
        linkedList = null;
        traversingQueue = true;
      }
    }
  }

  return list;

}


class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

/* Test */
const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);
const g = new TreeNode(7);
const h = new TreeNode(8);

a.left = b;
a.right = e;
b.left = d;
b.right = c;
e.left = g;
e.right = f;
g.left = h;

console.log(listOfDepths(a));
/*
We iterate through the list once and for each node,
compare the value to this pivot. If it's lesser, then within
the new linked list, update the head - otherwise, update
the tail. This will ensure that all elements less than pivot
will come before the elements greater than or equal to pivot.
This solution does not sort the elements within the "right"
partition.

Time: O(n)
Space: O(n)
*/

function partition(list, pivot) {
  let res = new LinkedList();
  list = listToArr(list);

  for (let i = 0; i < list.length; i++) {
    const node = list[i];

    if (!res.head || !res.tail) {
      let temp = new Node(node.value);
      res.head = temp;
      res.tail = temp;
      res.head.next = res.tail;
      continue;
    }

    if (node.value < pivot) {
        let prevHead = res.head;
        res.head = new Node(node.value);
        res.head.next = prevHead;
    } else {
        let temp = new Node(node.value);
        res.tail.next = temp;
        res.tail = temp;
    }
  }
  
  return res;
}

function listToArr(list) {
  let res = [];

  let currNode = list.head;

  while (currNode) {
    res.push(currNode);
    currNode = currNode.next;
  }

  return res;
}


class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

/* Test */
const j = new Node(3);
const k = new Node(5);
const l = new Node(8);
const m = new Node(5);
const o = new Node(10);
const p = new Node(2);
const q = new Node(1);

j.next = k;
k.next = l;
l.next = m;
m.next = o;
o.next = p;
p.next = q;

const list = new LinkedList();
list.head = j;
list.tail = q;


console.log(listToArr(partition(list, 5)));

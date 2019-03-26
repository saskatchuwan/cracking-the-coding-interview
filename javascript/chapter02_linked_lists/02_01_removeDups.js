class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

//Time: O(n) (Potentially O(n^2) if Set.has() is O(n) time
//Space: O(n)
function removeDups1(head) {
  let buffer = new Set();

  let prevNode = null;
  let node = head;
  
  while (node) {
    if (buffer.has(node.value)) {
      prevNode.next = node.next;
    } else {
      buffer.add(node.value);
      prevNode = node;
    }
    node = node.next;
  }

  return head;
}

function printLinkedList(headNode) {
  let currNode = headNode;

  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

//Tests
const a = new Node('a');
const b1 = new Node('b');
const c = new Node('c');
const b2 = new Node('b');

a.next = b1;
b1.next = c;
c.next = b2;

removeDups1(a);
printLinkedList(a);

const j = new Node('a');
const k = new Node('b');
const l = new Node('c');
const m = new Node('b');
const o = new Node('b');
const p = new Node('k');
const q = new Node('c');

j.next = k;
k.next = l;
l.next = m;
m.next = o;
o.next = p;
p.next = q;

removeDups1(j);
printLinkedList(j);
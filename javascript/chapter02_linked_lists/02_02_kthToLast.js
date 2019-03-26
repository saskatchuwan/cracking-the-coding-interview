class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
/**
 * Walk one pointer ahead k nodes first then create a second pointer to the
 * start of the list. Walk both pointers until the first one hits the end of the
 * list, at that point the second pointer will be pointing to the kth to last
 * node.
 *
 * n = |head|
 * Time: O(n)
 * Space: O(1)
 */

function kthToLastTwoPointers(head, k) {

  let node1 = head;
  let node2 = head;

  let trigger = 0;
  let kthToLastEl;

  while (node1) {
    if (trigger >= k) {
      kthToLastEl = node2;
      node2 = node2.next;
    }
    trigger += 1;
    node1 = node1.next;
  }
  return kthToLastEl;
}

//Tests
const j = new Node('j');
const k = new Node('k');
const l = new Node('l');
const m = new Node('m');
const o = new Node('o');
const p = new Node('p');
const q = new Node('q');

j.next = k;
k.next = l;
l.next = m;
m.next = o;
o.next = p;
p.next = q;

console.log(kthToLastTwoPointers(j, 5), k);
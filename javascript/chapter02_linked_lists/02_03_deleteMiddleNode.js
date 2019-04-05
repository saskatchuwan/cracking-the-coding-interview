/*
If the node up for deletion is the only thing we are given,
then we just need to copy over the data from the next node
and replace the current node's info with the next.

Time: O(1)
Space: O(1)
*/


class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function deleteMidNode(node) {
  //Addition of Error handling courtesy of careercup
  if (!node || !node.next) {
    throw new Error('invalid node');
    // return false;
  }

  node.value = node.next.value;
  node.next = node.next.next;

  return true;
}

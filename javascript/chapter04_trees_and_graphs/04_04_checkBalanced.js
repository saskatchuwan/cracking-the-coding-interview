/*
Here, we work off the definitions of a balanced Binary Tree, such that:

An empty tree is height-balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.

n = number of nodes
h = height of tree

Time: O(n log(n))
  -on each node, we recurse through its entire substree. this means that getHeight is called
  repeatedly on the same nodes. Thus, the runtime is O(n log(n)) since each node is 'touched'
  once per node above it.

Time: O(h) ~ O(log(n))
*/
function isBalanced(rootNode) {
  if (!rootNode) return true;

  const heightDiff = Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right));

  if (heightDiff <= 1 && isBalanced(rootNode.left) && isBalanced(rootNode.right)) return true;
  return false;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;

  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}


class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
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

const i = new TreeNode(9);
const j = null;

console.log(isBalanced(a), true);
console.log(isBalanced(i), true);
console.log(isBalanced(j), true);

h.left = i;
console.log(isBalanced(a), false);
/*
  Since array is already sorted, we use the mid value of the array to act
  as the root node of the tree. Split array into two halves (one containing
  all values less than mid and other containing all values greater than mid).
  We pass those arrays into function itself and set those results equal
  to the left and right children of the rootNode.

  N = |values|
  Time: O(log N) ????
  Additional space: O(N)
*/

function createBST(sortedArr) {
  if (sortedArr.length === 1) return new TreeNode(sortedArr[0]);
  if (sortedArr.length === 0) return null;

  const midIdx = Math.floor(sortedArr.length / 2);

  const left = sortedArr.slice(0, midIdx);
  const right = sortedArr.slice(midIdx+1);

  const rootNodeVal = sortedArr[midIdx];
  const rootNode = new TreeNode(rootNodeVal);

  rootNode.left = createBST(left);
  rootNode.right = createBST(right);

  return rootNode;
}

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

/* TEST */
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(createBST(arr1));

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(createBST(arr2));
/*
  Naive solution where you return a new array of all elements
  across both arrays sorted.

  n = sortedArrA.length
  m = sortedArrB.length
  Time: O(n) || O(m)
  Space: O(n*m)
*/
function sortedMergeNaive(sortedArrA, sortedArrB) {
  sortedArrA = sortedArrA.slice();
  sortedArrB = sortedArrB.slice();

  let sorted = [];

  while (sortedArrA.length && sortedArrB.length) {
    if (sortedArrA[0] < sortedArrB[0]) {
      sorted.push(sortedArrA.shift());
    } else {
      sorted.push(sortedArrB.shift());
    }
  }

  return sorted.concat(sortedArrA, sortedArrB);
}

/*
  Utilizing the fact that we are given the deailt of A having enough buffer
  at the end, we don't need to allocate additional space. We compare the last
  elements of A and B and insert them in order to the back of the A array.

  Time: O(n)
  Space: O(1)
*/

function sortedMerge(sortedArrA, sortedArrB) {
  let lastIdxA = sortedArrA.length - 1;
  let lastIdxB = sortedArrB.length - 1;
  let idxMerged = sortedArrA.length + sortedArrB.length - 1;

  while (lastIdxB >= 0) {
    if (sortedArrA[lastIdxA] < sortedArrB[lastIdxB]) {
      sortedArrA[idxMerged] = sortedArrB[lastIdxB];
      lastIdxB--;
    } else {
      sortedArrA[idxMerged] = sortedArrA[lastIdxA];
      lastIdxA--;
    }

    idxMerged -= 1;
  }

  return sortedArrA;
}



/* Tests */
const arr1 = [0, 2, 4];
const arr2 = [1, 3, 5];
const arr3 = [];
const arr4 = [0, 1, 2];

console.log('Naive');
console.log(sortedMergeNaive(arr1, arr2), [0, 1, 2, 3, 4, 5]);
console.log(sortedMergeNaive(arr1, arr3), [0, 2, 4]);

console.log('Better');
console.log(sortedMerge(arr1, arr2), [0, 1, 2, 3, 4, 5]);
console.log(sortedMerge(arr4, arr3), [0, 1, 2]);
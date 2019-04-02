/*
  Brute force way is to have 3 separate recursive calls for each step option
  (1 step, 2 steps, 3 steps).

  Time: O(3^n)
*/

function tripleStep(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  
  return tripleStep(n-1) + tripleStep(n-2) + tripleStep(n-3);
}

/* Tests */
console.log(tripleStep(2), 2);
console.log(tripleStep(3), 4);
console.log(tripleStep(0), 1);
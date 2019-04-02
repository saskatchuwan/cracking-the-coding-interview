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

/*
  Incorporated dynamic programming (memoization) to cache our results for each n.
  This way, we won't have to double explore what's already been calculated.
*/

function tripleStepMemo(n) {
  let memo = {};

  function _findNumWays(n, memo) {
    if (n in memo) {
      console.log('fetching memo for ', n);
      return memo[n];
    }
    if (n < 0) return 0;
    if (n === 0) return 1;
    
    let ans = _findNumWays(n-1, memo) + _findNumWays(n-2, memo) + _findNumWays(n-3, memo);
    console.log('storing memo for ', n);
    memo[n] = ans;
    return ans;
  }

  return _findNumWays(n, memo);
}

/* Tests */
console.log(tripleStep(2), 2);
console.log(tripleStep(3), 4);
console.log(tripleStep(0), 1);
console.log(tripleStep(30));

console.log(tripleStepMemo(2), 2);
console.log(tripleStepMemo(3), 4);
console.log(tripleStepMemo(0), 1);
console.log(tripleStepMemo(30));
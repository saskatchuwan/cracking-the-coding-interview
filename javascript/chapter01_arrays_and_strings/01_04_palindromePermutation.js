/*
At first, I think we needed to generate all possible permutations but then
realized that's completely inefficient. Here, we play off of knowing the 
characteristics of a palindrome - such that for any str of even or odd
length, the string itself can have at most one character with an odd count
of appearances. Doing it this way, we need to only loop through the string
once and loop through the values of our hash once.

n = str.length
Time: O(n)
Space: O(1) - hash that's created will never be more than the length of the
alphabet (26)
*/

function isPermutationOfPalindrome(str) {
  let chCount = {};

  for (let i = 0; i < str.length; i ++) {
    if (!chCount[str[i]] && str[i] !== ' ') {
      chCount[str[i]] = 1;
    } else if (str[i] !== ' ') {
      chCount[str[i]] += 1;
    }
  }

  let values = Object.values(chCount);

  let countOfOdds = 0;
  for (let j = 0; j < values.length; j++) {
    if (values[j] % 2 === 1) {
      countOfOdds += 1;
      if (countOfOdds > 1) {
        return false;
      }
    }
  }
  return true;
}


/* Test */
console.log(isPermutationOfPalindrome("tact coa"), true);
console.log(isPermutationOfPalindrome("cacerar"), true);
console.log(isPermutationOfPalindrome("baba"), true);
console.log(isPermutationOfPalindrome("kathryn"), false);
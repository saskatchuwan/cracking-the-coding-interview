//O(n^2) time and O(n) space complexity
function isPermutation(str1, str2) {
  if (str1.split("").sort().join("") === str2.split("").sort().join("")) return true;
  return false;
}

//tests
console.log("Testing isPermutation:");
console.log(isPermutation("abba", "baba"), true);                
console.log(isPermutation("racecar", "skdg"), false);             
console.log(isPermutation("racecar", "racer"), false);            
console.log(isPermutation("racecar", "racecar"), true);           
console.log(isPermutation("orange", "angero"), true);             
console.log(isPermutation("white space", "space white"), true);   

// https://blog.shovonhasan.com/time-space-complexity-of-array-sort-in-v8/

//First solution with one additional data structure to store count of characters in string
//O(n) time and O(n) space complexities for this approach

function isUnique1(str) {
  let counter = {};

  str.split("").forEach (ch => {
    if (!counter[ch]) {
      counter[ch] = 1;
    } else {
      counter[ch] += 1;
    }
  });

  return Object.values(counter).every(isOne);
}

function isOne(currentVal) {
  return currentVal === 1;
}

//tests
console.log("Testing isUnique1:");
console.log(isUnique1("kathryn"), true); 
console.log(isUnique1("abba"), false);    
console.log(isUnique1("k"), true);       


//Second approach if we cannot use additional data structures - compare each character to every other character
//O(n^2) time and O(1) space complexities
function isUnique2(str) {

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }

  return true;
}

//tests
console.log("Testing isUnique2:");
console.log(isUnique2("kathryn"), true); 
console.log(isUnique2("abba"), false);    
console.log(isUnique2("k"), true);       



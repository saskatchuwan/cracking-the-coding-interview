/*
  n = arr.length
  Time: O(n^2 log n)
    - potentially? due to the nest loop and nested .sort() call 
    (assuming .sort() is utilizing a sorting algorithm with O(log n) time)
  Space: O(n)
*/

function groupAnagrams(arr) {
  let hash = {};

  arr.forEach(word => {
    let keys = Object.keys(hash);
    
    const anagram = findAnagram(keys, word);
    
    if (anagram) {
      hash[anagram].push(word);
    } else {
      hash[word] = [];
    }
  });

  return combineKeysAndValues(Object.keys(hash), Object.values(hash));
}

function findAnagram(arrOfWords, word) {
  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].split("").sort().join("") === word.split("").sort().join("")) {
      return arrOfWords[i];
    }
  }

  return null;
}

function combineKeysAndValues(keys, values){
  let res = [];
  for (let i = 0; i< keys.length; i++) {

    res.push(keys[i]);
    
    if (values[i].length !== 0) {
      res = res.concat(...values[i]);
    }
  }

  return res;
}


/* TEST */

const anagrams = [
  'motherinlaw', 
  'debit card', 
  'dormitory', 
  'theearthquakes', 
  'astronomer', 
  'punishments', 
  'schoolmaster', 
  'hitlerwoman',
  'badcredit',
  'dirtyroom',
  'thequeershakes',
  'moonstarrer',
  'ninethumps',
  'theclassroom'
];

const anagramsSorted = [
  "ninethumps", 
  "punishments", 
  "dormitory", 
  "dirtyroom", 
  "astronomer", 
  "moonstarrer", 
  "motherinlaw", 
  "hitlerwoman", 
  "thequeershakes", 
  "schoolmaster", 
  "theclassroom", 
  "badcredit", 
  "theearthquakes", 
  "debit card"
];

console.log(groupAnagrams(anagrams));
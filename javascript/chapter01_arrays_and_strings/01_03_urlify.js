/*
Since it is explicitly stated that the input string has sufficient space to hold
the additional characters for each '%20', we implement the solution in such a way
where we start from the back of the input string and at each slot that is a space,
either swap it with a character from the end of the "true" string or we insert
'%20'.

Time: O(n)
Space: O(n)
*/

function urlify(str, trueLength) {
  let numExtraSpaces = str.length - trueLength;
  let strArr = str.split("");

  for (let i = str.length - 1; i >= 0; i--) {

    if (strArr[i] === '0' || strArr[i] === '2' || strArr[i] === '%') {
      continue;
    } else if (strArr[i] === ' ' && strArr[i - numExtraSpaces] !== ' ') {
      [strArr[i], strArr[i - numExtraSpaces]] = [strArr[i - numExtraSpaces], strArr[i]];
    } else if (strArr[i] === ' ' && strArr[i - numExtraSpaces] === ' ') {
      numExtraSpaces += 1;
      [strArr[i], strArr[i-1], strArr[i-2]] = ['0', '2', '%'];
      numExtraSpaces -= 3;
    } else {

    }
  }

  return strArr.join("");
}


/* Test */
console.log(urlify("Mr John Smith    ", 13), "Mr%20John%20Smith");
console.log(urlify("Mr Jo hn Smi th        ", 15), "Mr%20Jo%20hn%20Smi%20th");
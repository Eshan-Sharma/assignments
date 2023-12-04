/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let strArr = str.toLowerCase().split("");
  let count =0;
  for(let i = 0; i<strArr.length;i++){
    switch (strArr[i]) {
      case 'a':
        count++;
        break;
      case 'e':
        count++;
        break;
      case 'i':
        count++;
        break;
      case 'o':
        count++;
        break;
      case 'u':
        count++;
        break;
      default:
        break;
    }
  }
  return count;
}

module.exports = countVowels;
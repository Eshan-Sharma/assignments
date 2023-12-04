/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().split(" ").join("");
// console.log(str);
str = str.replaceAll(/[!,?.]/g,"");
// console.log(str);
strReverse = str.split("").reverse().join("");
if(str==strReverse){
  return true;
}else{
  return false;
}
}

module.exports = isPalindrome;

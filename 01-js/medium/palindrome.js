/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let stringForCheck = ""
  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122))
      stringForCheck += str[i];
  }
  for (let i = 0, j = (stringForCheck.length-1); i < stringForCheck.length; i++, j--) {
    if (stringForCheck[i].toLowerCase() == stringForCheck[j].toLowerCase()) {
      continue;
    }
    else
      return false;
  }
  return true;
}

module.exports = isPalindrome;

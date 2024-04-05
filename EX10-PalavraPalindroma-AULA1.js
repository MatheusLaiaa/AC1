function isPalindrome(str) {

  var cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();


  var reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}


console.log(isPalindrome("A man, a plan, a canal. Panama")); // true
console.log(isPalindrome("hello world")); // false
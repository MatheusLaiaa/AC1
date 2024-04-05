function reverseString(str) {
  // Check if the input is a string
  if (typeof str!== 'string') {
    return ;
  }

  // Reverse the string
  return str.split('').reverse().join('');
}
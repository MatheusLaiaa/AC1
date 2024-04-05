function countVowels(str) {

  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    // Check if the character is a lowercase vowel
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(countVowels("The quick brown fox"));
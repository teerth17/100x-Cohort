/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i in str) {
    if (vowels.includes(str[i].toLowerCase())) {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(countVowels("OpenAI"));

module.exports = countVowels;

// If the reversed string is equal to the original one then that word is a palindrome
// Q1.
const palindrome = (word) => {
  const reversed = word.split("").reverse().join("");
  if (reversed.toLowerCase() == word.toLowerCase()) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
};
palindrome("Abba");

// Q2 Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const validPalindrome = (s) => {
  //step:1
  const newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = newStr.split("").reverse().join("");

  if (reversedStr === newStr) {
    console.log(true);
  } else {
    console.log(false);
  }
};
validPalindrome("race a car ");

var isPalindrome = function (s) {
  const newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = newStr.split("").reverse().join("");
  console.log(newStr === reversedStr ? true : false);
};
isPalindrome("A man, a plan, a canal: Panama");

const palindromeNum = (x) => {
  var reverse = 0;
  var copy = x;

  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy / 10);
    console.log(copy);
  }

  console.log(reverse == x);
};
palindromeNum(12131);

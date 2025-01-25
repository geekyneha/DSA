let i = 0;
const palindrome = (s) => {
  if (i >= Math.floor(s.length / 2)) {
    return true;
  }
  if (s[i] !== s[s.length - i - 1]) {
    return false;
  }
  i++;
  return palindrome(s);
};
console.log(palindrome("madam"));

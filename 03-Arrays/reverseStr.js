const reversestr = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reversestr("hello"));

var reverseString = function (s) {
  for (let i = s.length; i >= 0; i--) {}
};
reverseString(["h", "e", "l", "l", "o"]);

var reverseWords = function (s) {
  console.log(s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" "));
};

reverseWords("     the    sky is    blue    ");

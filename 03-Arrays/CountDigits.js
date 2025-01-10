const countDigit = (num) => {
  while (num > 0) {
    count = count + 1;
    num = Math.floor(num / 10);
  }
  return count;
};
console.log(countDigit(123));

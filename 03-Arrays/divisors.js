const divsors = (num) => {
  const arr = [];
  // Math.sqrt
  for (let i = 0; i * i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
      if (Math.floor(num / i) !== i) {
        arr.push(Math.floor(num / i));
      }
    }
  }
  return arr.sort(function (a, b) {
    return a - b;
  });
};
console.log(divsors(36));

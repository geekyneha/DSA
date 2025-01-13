const prime = (n) => {
  count = 0;
  for (let i = 1; i * n <= n; i++) {
    if (n % i == 0) {
      count++;
      if (Math.floor(n / i) !== i) {
        count++;
      }
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
};

console.log(prime(2));

const prime = (n) => {
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
};

console.log(prime(7));

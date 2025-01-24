const powerFour = (n) => {
  if (n === 1) {
    return true;
  }

  if (n % 4 !== 0 || n <= 0) {
    return false;
  }

  return powerFour(n / 4);
};

console.log(powerFour(16));

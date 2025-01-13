const armstrong = (n) => {
  let sum = 0;
  let dup = n;
  while (n > 0) {
    let d = n % 10;

    n = Math.floor(n / 10);
    sum = sum + d * d * d;
  }
  if (dup == sum) return true;
  else return false;
};
console.log(armstrong(371));

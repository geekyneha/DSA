const towerOfHanoi = (n, src, aux, dest) => {
  if (n == 0) {
    return;
  }
  towerOfHanoi(n - 1, src, aux, dest);
  console.log(n);

  towerOfHanoi(n - 1, aux, dest, src);
};
console.log(towerOfHanoi(3, "A", "C", "B"));

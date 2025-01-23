let num = 10;
const printName = (i, n) => {
  if (i > n) return;

  console.log("Neha");

  printName(i + 1, n);
};

printName(1, num);

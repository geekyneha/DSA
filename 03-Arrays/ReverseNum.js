const revNum = (num) => {
  let revNum = 0;
  while (num > 0) {
    let lastdigit = num % 10;
    revNum = revNum * 10 + lastdigit;
    num = Math.floor(num / 10);
  }
  return revNum;
};
console.log(revNum(321));

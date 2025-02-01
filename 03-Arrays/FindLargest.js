const findlargest = (num) => {
  let largest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }
  return largest;
};

console.log(findlargest([1, 2, 3, 4, 7]));

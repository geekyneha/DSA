const missingNumber = (num) => {
  let set = new Set(num);
  for (let i = 0; i < num.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};
console.log(missingNumber([1, 3, 4, 5, 0]));

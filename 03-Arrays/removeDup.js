const removedup = (nums) => {
  let index = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
console.log(removedup([1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 7]));

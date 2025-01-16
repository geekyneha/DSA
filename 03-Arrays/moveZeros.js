const moveZeroes = (nums) => {
  let startIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[startIndex];
      nums[startIndex] = temp;

      startIndex++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 2, 3, 4]));

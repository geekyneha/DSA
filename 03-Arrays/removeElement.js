const removeElement = (nums, val) => {
  let startIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[startIndex] = nums[i];
      startIndex++;
    }
  }
  return startIndex;
};
console.log(removeElement([2, 2, 3, 3], 3));

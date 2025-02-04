const rotate = (nums) => {
  let n = nums.length;

  let temp = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    nums[i + 1] = nums[i];
  }
  nums[0] = temp;
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7]));

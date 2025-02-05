const rotate1place = (nums) => {
  let n = nums.length;
  let temp = nums[n - 1]; // Store the last element
  let i = n - 2;

  while (i >= 0) {
    nums[i + 1] = nums[i]; // Shift elements to the right
    i--;
  }

  nums[0] = temp; // Correct assignment
};

const rotate = (nums, k) => {
  while (k > 0) {
    rotate1place(nums);
    k--;
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

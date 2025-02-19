const segregate = (nums) => {
  let n = nums.length;

  let start = 0;
  let end = n - 1;

  while (start < end) {
    if (nums[start] == 0) {
      start++;
    } else {
      if (nums[end] == 0) {
        let temp;

        // temp = nums[start];
        // nums[start] = nums[end];
        // nums[end] = temp;

        [nums[start], nums[end]] = [nums[end], nums[start]];

        start++;
        end--;
      } else {
        end--;
      }
    }
  }
  return nums;
};

console.log(segregate([1, 0, 0, 0, 1, 0, 1]));

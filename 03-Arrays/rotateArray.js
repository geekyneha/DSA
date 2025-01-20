const rotate = (nums, k) => {
  let n = nums.length;

  // Normalize k to ensure it's within the array bounds
  k = k % n;

  // Helper function to reverse part of the array
  const reverse = (arr, start, end) => {
    while (start < end) {
      // Swap elements
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  // Step 1: Reverse the entire array
  reverse(nums, 0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Step 3: Reverse the remaining elements
  reverse(nums, k, n - 1);

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6], 3));

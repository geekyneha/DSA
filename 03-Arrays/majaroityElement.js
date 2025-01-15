const majaority = (nums) => {
  nums.sort((a, b) => a - b); // Step 1: Sort the array in ascending order
  const n = nums.length;
  return nums[Math.floor(n / 2)]; // Step 2: Return the middle element
};
console.log(majaority([3, 2, 3, 1, 3]));

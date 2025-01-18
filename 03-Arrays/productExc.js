const productExceptSelf = (nums) => {
  const n = nums.length;
  const result = Array(n).fill(1);

  let i = 0;
  let prefix = 1;

  // Phase 1: Calculate prefix product using a while loop
  while (i < n) {
    result[i] = prefix;
    prefix *= nums[i];
    i++;
  }

  let j = n - 1;
  let suffix = 1;

  // Phase 2: Calculate suffix product and multiply with prefix product
  while (j >= 0) {
    result[j] *= suffix;
    suffix *= nums[j];
    j--;
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4, 5])); // Output: [120, 60, 40, 30, 24]

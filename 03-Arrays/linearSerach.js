const linearSearch = (nums, k) => {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] == k) {
      return true;
    }
  }
  return false;
};
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 6));

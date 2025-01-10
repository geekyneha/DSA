const pairs = (nums) => {
  let count = 0;

  let i = 0;
  let j = i + 1;
  while (i < nums.length) {
    if (nums[i] == nums[j]) {
      count++;
    }
    i++;
    j++;
  }
  return count;
};
console.log(pairs([1, 2, 3, 1, 1, 3]));

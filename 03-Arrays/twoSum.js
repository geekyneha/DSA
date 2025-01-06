// Two Sum.
// [2,7,11,15] target =9;
// [0,1]
// This is not the better but beginner friendly solution

var twoSum = function (nums, target) {
  // loop through each number in the list.
  for (let i = 0; i < nums.length; i++) {
    // for each number check the rest of the list
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        // if the current number and the one we're checking add up to the target , return their indices
        console.log([i, j]);
        return;
      }
    }
  }
  return [];
};
twoSum([3, 3], 6);

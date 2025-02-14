const Leaders = (nums) => {
  let ans = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let isLeader = true;
    for (let j = i + 1; j < n; j++) {
      if (nums[i] < nums[j]) {
        // If any right element is greater, it's not a leader
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      ans.push(nums[i]);
    }
  }
  return ans;
};

console.log(Leaders([16, 17, 4, 3, 5, 2]));

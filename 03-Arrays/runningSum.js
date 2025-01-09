const runningSum = (nums) => {
  let n = nums.length;
  let sumArr = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];
    sumArr.push(sum);
  }
  return sumArr;
};

// Another way
// let sum = 0;
// return nums.map((_,i) => sum += nums[i]);

// using reduce

//   nums.reduce((acc, curr, index) => (nums[index] = acc + curr), 0);
//   return nums;

console.log(runningSum([1, 2, 3, 4, 5]));

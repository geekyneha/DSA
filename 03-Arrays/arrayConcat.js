// 1. using two for loop
const concatArr = (arr) => {
  let concated = [];

  for (let i = 0; i < arr.length; i++) {
    concated.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    concated.push(arr[i]);
  }
  return concated;
};

// 2. using one for loop

const concatArray = (nums) => {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    nums.push(nums[i]);
  }
  return nums;
};

// another way [...nums, nums];

console.log(concatArray([1, 2, 3]));
console.log(concatArray([1, 2, 3, 4]));

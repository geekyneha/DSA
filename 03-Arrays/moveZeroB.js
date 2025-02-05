const moveZero = (nums) => {
  let n = nums.length;
  // create a temp to store non zero numbers
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      //add non zero to the temp
      temp.push(nums[i]);
    }
  }
  //2. replace nums to temp ;

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  for (let i = temp.length; i < n; i++) {
    nums[i] = 0;
  }
  return nums;
};
console.log(moveZero([1, 0, 23, 3, 0, 8, 9, 1, 0]));

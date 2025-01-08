// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.
// Input: nums = [3, 4, 5, 1, 2];
// Output: true;
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2];

// solution

// Step1:
// find the index minimum element first.
// Step:2
// Checking if right and left segments are sorted. sorted -> true

// check if last element of the right segment is smaller than the first element of the left segment .

var check = function (nums) {
  // if length of the array is less or equal 2 its sorted.

  if (nums.length <= 2) {
    return true;
  }

  // find the index of minimum element

  let min = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[min]) {
      min = i;
    }
  }

  // check if left side of min element is sorted in ascending;

  for (let i = 0; i < min - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  // check the right segment from min
  for (let i = min; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }

  // check if last element is smaller than the first;

  if (nums[nums.length - 1] > nums[0]) {
    return false;
  }

  return true;
};

console.log(check([2, 2, 3, 4, 5, 2]));

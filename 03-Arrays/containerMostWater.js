var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let mostWater = 0;

  while (left < right) {
    let distance = right - left;
    let minHeight = Math.min(height[left], height[right]);

    let currHeight = minHeight * distance;

    mostWater = Math.max(currHeight, mostWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return left;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

const uniqueElement = (arr) => {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }
  return ans;
};
console.log(uniqueElement([3, 4, 5, 3, 5, 4, 6]));

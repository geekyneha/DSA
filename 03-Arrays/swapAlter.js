const swapAlter = (arr) => {
  // Loop through the array and increment by 2
  for (let i = 0; i < arr.length; i += 2) {
    // check if index + 1 is in the array range;
    if (i + 1 < arr.length) {
      // swap alternative
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
};
console.log(swapAlter([1, 2, 3, 4, 5, 6]));

const secondLargest = (arr) => {
  //1.set it to smallest possible integer
  let secondLargest = Number.NEGATIVE_INFINITY;
  let largest = Number.NEGATIVE_INFINITY;

  //2.loop through the array to find the largest number

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  //3. Loop through the array to find second largest by comparing neglecting largest and find largest in the rest of the array.
  for (let i = 0; i < arr.length; i++) {
    // check if the current value is not equal to largest
    if (arr[i] != largest) {
      // check if current is greater than the secondLargest
      if (arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
      //another way
      //   secondLargest = Math.max(secondLargest, arr[i]);
    }
  }

  return secondLargest;
};
console.log(secondLargest([12, 35, 1, 10, 34, 1]));

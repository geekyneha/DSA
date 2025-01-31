function countingSort(arr) {
  // Step 1: Find the maximum element in the array
  const maxElem = Math.max(...arr);

  // Step 2: Create a count array and initialize it to 0
  const count = new Array(maxElem + 1).fill(0);

  // Step 3: Count the frequency of each element in the original array
  arr.forEach((num) => {
    count[num]++;
  });

  // Step 4: Modify the count array to store the cumulative count
  for (let i = 1; i <= maxElem; i++) {
    count[i] += count[i - 1];
  }

  // Step 5: Create a sorted output array
  const sortedArr = new Array(arr.length);

  // Step 6: Place elements in the sorted array
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArr[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  // Step 7: Copy the sorted array to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = sortedArr[i];
  }
}

const arr = [4, 2, 2, 8, 3, 3, 1];
countingSort(arr);

console.log("Sorted array:", arr);

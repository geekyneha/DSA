const chunkArray = (arr, size) => {
  // 1. Create an empty array to hold the chunks.
  let chunked = [];
  // 2. Set a starting index to keep track of where we are in the original array.

  //3. Loop through the array as long as the index hasn't reached the end.
  for (i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunked.push(chunk);
  }

  console.log(chunked);
};

chunkArray([1, 2, 3, 4, 5, 4], 1);

var chunk = function (arr, size) {
  // create an empty array to hold chunks.

  const chunked = [];

  //set a starting index.

  let index = 0;

  // loop throgh the original array

  while (index < arr.length) {
    // extract a chunk of the size
    const chunk = arr.slice(index, index + size);
    // add chunk to the chunked array
    chunked.push(chunk);
    //move the index by the chunk size to get next chunk
    index += size;
  }
  // return the final array of chunkes
  console.log(chunked);
};
chunk([1, 2, 3, 4, 5], 1);

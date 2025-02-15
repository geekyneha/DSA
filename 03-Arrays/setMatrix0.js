const setMatrix0 = (matrix) => {
  //create row and colums array
  let n = matrix.length;
  let m = matrix[0].length;

  // Create a deep copy of matrix
  const matrix2 = matrix.map((row) => [...row]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix2[i][j] === 0) {
        // Set entire column to 0
        for (let k = 0; k < n; k++) {
          matrix[k][j] = 0;
        }
        // Set entire row to 0
        for (let k = 0; k < m; k++) {
          matrix[i][k] = 0;
        }
      }
    }
  }
  return matrix;
};
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(setMatrix0(matrix));

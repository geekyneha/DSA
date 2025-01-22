function setZeroes(matrix) {
  let rows = matrix.length;
  let col = matrix[0].length;

  const markRow = (i) => {
    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  };
  const markCol = (j) => {
    for (let i = 0; i < col; i++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  };
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        markRow(i);
        markCol(j);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = 0;
      }
    }
  }
}
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(setZeroes(matrix));

console.log(matrix);
// Output:
// [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1]
// ]

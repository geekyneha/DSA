const setZeroes = (matrix) => {
  let m = matrix.length;
  let n = matrix[0].length;

  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = 1;
        cols[j] = 1;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || rows[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};
const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

console.log(setZeroes(matrix));

console.log(matrix);

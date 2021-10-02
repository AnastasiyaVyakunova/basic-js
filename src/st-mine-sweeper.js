export default function minesweeper(matrix) {
  let result = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    result[i] = new Array(matrix[i].length);
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = 0;
      if (i > 0) {
        if (matrix[i - 1][j]) {
          result[i][j]++;
        }
        if (j > 0) {
          if (matrix[i - 1][j - 1]) {
            result[i][j]++;
          } 
        }
        if (j + 1 < matrix[i].length) {
          if (matrix[i - 1][j + 1]) {
            result[i][j]++;
          }
        }
      }
      if (j > 0) {
        if (matrix[i][j - 1]) {
          result[i][j]++;
        } 
      }
      if (j + 1 < matrix[i].length) {
        if (matrix[i][j + 1]) {
          result[i][j]++;
        }
      }
      if (i + 1 < matrix.length) {
        if (matrix[i + 1][j]) {
          result[i][j]++;
        }
        if (j > 0) {
          if (matrix[i + 1][j - 1]) {
            result[i][j]++;
          } 
        }
        if (j + 1 < matrix[i].length) {
          if (matrix[i + 1][j + 1]) {
            result[i][j]++;
          }
        }
      }
    }
  }
  return result;
}
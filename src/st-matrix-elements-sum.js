export default function getMatrixElementsSum(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length;) {
    for (let j = 0; j < matrix[i].length;) {
      if (matrix[i][j] !== 0) {
        count += matrix[i][j];
        i++;
        if (i > matrix.length - 1) {
          i = 0; 
          j++;
        } 
      } else {
        j++;
        i = 0;
      }
      if (j > matrix[i].length - 1) {
        return count;
      }
    }
  }
}
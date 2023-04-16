const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 *
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

// matrix = [
//   [1, 0, 1],
//   [2, 2, 0],
//   [3, 3, 3],
// ];

function getMatrixElementsSum(matrix) {
  let sum = 0;

  let col_len = matrix.length;
  var row_len = matrix[0].length;

  for (let i = 0; i < row_len; i++) {
    for (let j = 0; j < col_len; j++) {
      if (matrix[j][i] === 0) {
        matrix[j + 1][i] = 0;
        console.log(matrix);
      } else {
        console.log(matrix[j][i]);
      }
      sum = sum + matrix[j][i];
      // } else {
    }
  }
  // for (let i = 0; i < matrix.length; i++) {
  //   let width = matrix[i].length;
  //   for (let j = 0; j < width; j++) {
  //     sum = sum + matrix[i][j];

  //     if (matrix[i][j] === 0) {
  //       if (i !== 0) {
  //         sum = sum - matrix[i + 1][j];
  //       }
  //     }
  //   }
  // }
  // return sum;
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[0].length; j++) {
  //     // console.log(sum);
  //     if (matrix[j][i] !== 0) {
  //       sum = sum + (matrix[j][i]);
  //       // for (let k = 0; k < matrix[j].length - j; k++) {
  //       //   // console.log(k);
  //       //   sum = sum - (matrix[k][i]);
  //       //   console.log(sum);
  //       // }
  //     } else {
  //       console.log(j);
  //       i++;
  //     }
  //   }
  // }
  return sum;
}

// console.log(getMatrixElementsSum(matrix));

module.exports = {
  getMatrixElementsSum,
};

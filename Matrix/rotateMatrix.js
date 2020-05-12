/* Write a function that rotates a MxN matrix 90 degrees clockwise.
 for example, if given: 
[
   [1,2,3],
   [5,6,7],
   [9,'A','B'],
   ['D','E','F']
  ]

the rotated matrix will be: 
[ 
    ['D',9,5,1],
   ['E','A',6,2],
   ['F','B',7,3]
  ]
  */

var rotateMatrix = function(matrix) {
let m = matrix.length;
let n = matrix[0].length;
let output = Array(n).fill([]).map(row => Array(m).fill(null)); // by rotating, we invert the dimensions so that m (rows) is now n (columns) and vice-versa
for (var i = 0 ; i < n; i++) { // notice in the rotated matrix, first row = first column of old matrix (but in reverse), second row = second col (in reverse), etc.
    for (var j = 0; j < m; j++) { // thus filling out any row of the rotated matrix, corresponds to traversing upward through the corresponding column
        output[i][j] = matrix[m - j - 1][i]
    }
}
return output;
}


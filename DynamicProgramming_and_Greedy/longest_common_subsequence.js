// Given two strings text1 and text2, return the length of their longest common subsequence.

var longestCommonSubsequence = function(string1, string2) {
if (!string1 || !string2) {return 0}
var matrix = Array(string2.length + 1).fill(null).map(row => Array(string1.length).fill(null))

for (var i = 0; i <= string1.length; i++) { // top row full of zeroes -- nothing in common with ''
    matrix[0][i] = 0
}

for (var j = 0; j <= string2.length; j++) { // left column full of zeroes -- nothing in common with ''
    matrix[j][0] = 0
}

for (var i = 1; i <= string2.length; i++) {
    for (var j = 1; j <= string1.length; j++) {
        if (string1[j - 1] === string2[i - 1]) { // if characters in string1/string2 are the same at these indexes, add 1 in matrix from their position in previous in index
            matrix[i][j] = matrix[i-1][j-1] + 1
        } else { // otherwise this square is max of left/top squares
            matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1])
        }
    }
} 
return matrix[matrix.length - 1][matrix[0].length - 1] // bottom right square is total chars in common
}


/*
  '' A B C D E
'' 0 0 0 0 0 0
A  0 1 1 1 1 1
C  0 1 1 2 2 2
E  0 1 1 2 2 3
*/

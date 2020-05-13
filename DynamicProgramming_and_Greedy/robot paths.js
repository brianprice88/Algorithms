// A robot located at the top left corner of a nxn grid is trying to reach the 
// bottom right corner. The robot can move either down or right. How many possible unique paths are 
// there to the bottom right corner? 

var robotPaths = function(n) {
var board = Array(n).fill([]).map(row => Array(n).fill(null))

for (var i = 0; i < board.length; i++) { // initialize left column with 1 since there is only one path to get to each square
  board[i][0] = 1
}

for (var j = 0; j < board[0].length; j++) { // initialize top row with 1 since there is only one path to get to each square 
  board[0][j] = 1
}

for (var i = 1; i < board.length; i++) { // fill in the rest of the table:
  for (var j = 1; j < board[i].length; j++) { // each square is combo of ways to get to the square above (from which robot can only go down)
    board[i][j] = board[i-1][j] + board[i][j-1] // or the square to the left (from which robot can only go right)
  }
}

return board[n-1][n-1] // bottom right square in the table is total number of ways to get there from top left
}
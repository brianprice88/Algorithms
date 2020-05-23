// A robot located at the top left corner of a nxn grid is trying to reach the 
// bottom right corner. The robot can move either down or right. How many possible unique paths are 
// there to the bottom right corner? 

var robotPaths = function (n) {
  var board = Array(n).fill([]).map(row => Array(n).fill(null))

  for (var i = 0; i < board.length; i++) { // initialize left column with 1 since there is only one path to get to each square
    board[i][0] = 1
  }

  for (var j = 0; j < board[0].length; j++) { // initialize top row with 1 since there is only one path to get to each square 
    board[0][j] = 1
  }

  for (var i = 1; i < board.length; i++) { // fill in the rest of the table:
    for (var j = 1; j < board[i].length; j++) { // each square is combo of ways to get to the square above (from which robot can only go down)
      board[i][j] = board[i - 1][j] + board[i][j - 1] // or the square to the left (from which robot can only go right)
    }
  }

  return board[n - 1][n - 1] // bottom right square in the table is total number of ways to get there from top left
}

/* Variation on a similar problem:
Given a grid filled with non-negative numbers, where you can only move down or right:
find a path from top left to bottom right which minimizes the sum of all numbers along its path.
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
==> ans is 7 (1 + 3 + 1 + 1 + 1)
*/

var minimumPathSum = function (grid) {

  var dp = Array(grid.length).fill([]).map(row => Array(grid[0].length).fill(0)) // create another grid to represent the minimal path to each corresponding location in the original grid

  dp[0][0] = grid[0][0] // starting spot's value is its value on the grid

  for (var i = 1; i < dp[0].length; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1] // top row of the dp grid is just an accumulation of the corresponding grid row, since we're moving right each time
  }

  for (var i = 1; i < dp.length; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0] // left column of the dp grid is just an accumulation of the corresponding grid col, since we're moving down each time
  }

  for (var i = 1; i < dp.length; i++) { // now fil out the remaining values in the grid
    for (var j = 1; j < dp[0].length; j++) {
      if (dp[i - 1][j] > dp[i][j - 1]) { // compare the values above and to the left, and select the lesser
        dp[i][j] = grid[i][j] + dp[i][j - 1]; // then add that to the current square's corresponding value in the grid, to get the total minimum sum for that square
      } else {
        dp[i][j] = grid[i][j] + dp[i - 1][j];
      }
    }
  }

  return dp[i - 1][j - 1]

}
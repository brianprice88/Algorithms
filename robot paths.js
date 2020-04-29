// A robot located at the top left corner of a nxn grid is trying to reach the 
//    bottom right corner. The robot can move either up, down, left, or right, 
//    but cannot visit the same spot twice. How many possible unique paths are 
//    there to the bottom right corner? 

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};


var robotPaths = function(n, board) {
board = board || makeBoard(n); // create board if it doesn't exist

var paths = 0;

var checkRoutes = function(i, j) {
if (i === n - 1 && j === n -1) { // if at the bottom right, add 1 to count and return
	paths ++;
	return;
}

if (i < 0 || i > n - 1 || j < 0 || j > n - 1) { // if off the board, return
	return;
}

if (board.hasBeenVisited(i, j)) { // if this spot has been visited, return
	return
}

board.togglePiece(i, j); // otherwise toggle piece to false (been visited)
checkRoutes(i + 1, j) // then run this function again for left/right/up/down move
checkRoutes(i - 1, j)
checkRoutes(i, j + 1)
checkRoutes(i, j - 1)
board.togglePiece(i, j) // and finally toggle the piece back to true

}
checkRoutes (0, 0) // start checking routes from top left

return paths;
}

// Dynamic programming solution if robot can only move down or right

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
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
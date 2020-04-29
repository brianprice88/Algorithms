// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

var rowCheck = function(board) {
for (var i = 0; i < board.length; i++) {
  var row = board[i];
  if (row.length !== 9) {return false}
  for (var j = 1; j <= 9; j++) {
  	if (row.indexOf(j) === -1) {return false}
  }
}
return true;
}

var columnCheck = function(board) {
var cols = [];
for (var i = 0; i < board.length; i++) {
	var col = ''
  for (var j = 0; j < board[i].length; j++) {
  	col += board[j][i]
  }
  cols.push(col)
}

return rowCheck(cols)
}

var gridCheck = function(board) {
let midpoints = [
[1, 1],
[1, 4],
[1, 7],
[4, 1],
[4, 4],
[4, 7],
[7, 1],
[7, 4],
[7, 7],
]
var grids = [];
for (var i = 0; i < midpoints.length; i++) {
	var grid = '';
	midX = midpoints[i][0]
	midY = midpoints[i][1]
	grid += board[midX - 1][midY - 1] 
		 += board[midX - 1][midY]
		 += board[midX - 1][midY + 1]
		 += board[midX][midY - 1]
		 += board[midX][midY]
		 += board[midX][midY + 1]
		 += board[midX + 1][midY - 1]
		 += board[midX + 1][midY]
		 += board[midX + 1][midY + 1]
	grids.push(grid)
}		
return rowCheck(grids)
}

function sudokuChecker(board) {
var splitBoard = board.split('\n');
if (!rowCheck(splitBoard.slice())) {return false}
if (!columnCheck(splitBoard.slice())) {return false}
if (!gridCheck(splitBoard.slice())) {return false}
return true;
}
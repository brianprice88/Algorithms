// Place n queens on an nxn chessboard such that no two queens can attack each other

var solveNQueens = function(n) {

	//to create a board
var board = function(n) {return Array(n).fill([]).map(row => Array(n).fill('.'))}

	//helper functions to find conflicts for rows/columns/diagonals
var hasRowConflict = function(current) {
for (var i = 0; i < current.length; i++) {
	var row = current[i];
	var count = 0;
	for (var j = 0; j < row.length; j++) {
		let square = row[j];
		if (square === 'Q') {
			count++;
			if (count > 1) {return true}
		}
	}
	count = 0;
}
return false
}

var hasColumnConflict = function(current) {
for (var i = 0; i < current.length; i++) {
	var count = 0;
	for (var j = 0; j < current[i].length; j++) {
		let square = current[j][i];
		if (square === 'Q') {
			count++;
			if (count > 1) {return true}
		}
	}
	count = 0
}
return false
}

var hasMajorDiagonalConflict = function(current) {
for (var i = 0; i < current.length; i++) {
	for (var j = 0; j < current[i].length; j++) {
		var square = current[i][j]
		var row = i;
		var col = j;
		if (square === 'Q') { // top left to bottom right diagonal
			while (current[row-1] && current[row-1][col-1]) {
				if (current[row-1][col-1] === 'Q') {return true}
				row--;
				col--
			}
			row = i;
			col = j;
			while (current[row+1] && current[row+1][col+1]) {
				if (current[row+1][col+1] === 'Q') {return true}
				row++;
				col++
			}
		}
	}
}
return false
}

var hasMinorDiagonalConflict = function(current) {
for (var i = 0; i < current.length; i++) {
	for (var j = 0; j < current[i].length; j++) {
		var square = current[i][j]
		var row = i;
		var col = j;
		if (square === 'Q') { // bottom right to top left diagonal
			while (current[row+1] && current[row+1][col-1]) {
				if (current[row+1][col-1] === 'Q') {return true}
				row++;
				col--
			}
			row = i;
			col = j;
			while (current[row-1] && current[row-1][col+1]) {
				if (current[row-1][col+1] === 'Q') {return true}
				row--;
				col++
			}
		}
	}
}
return false
}

var hasNoConflicts = function(current) {
	return !hasRowConflict(current) && !hasColumnConflict(current) && !hasMajorDiagonalConflict(current) && !hasMinorDiagonalConflict(current)
}



var solutions = [];

var solver = function(layout, currentRow) {
  if (currentRow === n) {
  	var solution = layout.map(row => row.slice())
  	solutions.push(solution);
  	return;
  }
 
  for (var i = 0; i < layout[currentRow].length; i++) {
  	
  		layout[currentRow][i] = 'Q'
  		if (hasNoConflicts(layout)) {
  			solver(layout, currentRow + 1)
  		}
  		layout[currentRow][i] = '.'
  	}

}

solver(board(n), 0)
return solutions;
}
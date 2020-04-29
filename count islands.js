// Given a string representation of a 2d map, return the number of islands in the map. 
//  Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
//   are considered connected if they are adjacent (but not diagonal).

var countIslands = function(string) {
var array = string.split('\n');
var islands = 0;

var coverSquares = function(x, y) { // recursively check up/right/left/down if they exist/are 0's, and change to '.'
array[x][y] = '.';
if (array[x+1] && array[x + 1][y] && (array[x + 1][y] === '0')) {
	coverSquares(x + 1, y)
}
if (array[x-1] && array[x - 1][y] && (array[x - 1][y] === '0')) {
	coverSquares(x - 1, y)
}
if (array[x][y + 1] && (array[x][y + 1] === '0')) {
	coverSquares(x, y + 1)
}
if (array[x][y - 1] && (array[x][y - 1] === '0')) {
	coverSquares(x, y - 1)
}

}

for (var i = 0; i < array.length; i++) {
	for (var j = 0; j < array[i].length; j++) { // if we hit a 0, add to count and run coverSquares
		if (array[i][j] === '0') {
			islands ++;
			coverSquares(i, j)
		}
	}
}

return islands
}
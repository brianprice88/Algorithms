var countIslands = function(string) {
var array = string.split('\n');
var islands = 0;

var coverSquares = function(x, y) { // recursively check up/right/left/down if they exist/are 0's
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
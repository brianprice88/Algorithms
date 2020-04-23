// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
//   and prints out every value found, but in a spiral from the upper left in to the center

var spiralTraversal = function(matrix) {
var results = [];
if (matrix.length === 0) {return []}
var mat = matrix.slice()
var length = mat.length * mat[0].length;
var i = 0;
var j = 0;
var direction = 'r';
while (results.length < length) { // do this until results has all values in matrix
if (direction === 'r') {
  while (matrix[i][j + 1] !== undefined && matrix[i][j + 1] !== '') { // as long as next square to the right is a value, log current square/change to '' and move right
  	results.push(matrix[i][j])
    matrix[i][j] = ''
    j ++
  } // when next square will be '' or off the grid, log current square/change to '' and start moving down
    results.push(matrix[i][j])
    matrix[i][j] = ''
  i ++;
  direction = 'd'
}
else if (direction === 'd') { // as long as next square down is a value, log current square/change to '' and move down
  while (matrix [i+1] && matrix[i + 1][j] !== undefined && matrix[i + 1][j] !== '') {
  	results.push(matrix[i][j])
    matrix[i][j] = ''
    i++
  } // when next square will be '' or off the grid, log current square/change to '' and start moving left
  results.push(matrix[i][j])
    matrix[i][j] = ''
    j--
  direction = 'l'
}
else if (direction === 'l') { // as long as next square left is a value, log current square/change to '' and move down
  while (matrix[i][j - 1] !== undefined && matrix[i][j - 1] !== '') {
  	results.push(matrix[i][j])
    matrix[i][j] = ''
    j--
  } // when next square will be '' or off the grid, log current square/change to '' and start moving up
  results.push(matrix[i][j])
    matrix[i][j] = ''
    i--
    direction = 'u'
}
else if (direction === 'u') { // as long as next square up is a value, log current square/change to '' and move down
  while (matrix[i - 1] && matrix[i - 1][j] !== undefined && matrix[i - 1][j] !== '') {
  	results.push(matrix[i][j])
    matrix[i][j] = ''
    i--
  } // when next square will be '' or off the grid, log current square/change to '' and start moving right
  results.push(matrix[i][j])
    matrix[i][j] = ''
  j++
  direction = 'r'
}

}
return results;
}
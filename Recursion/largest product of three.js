// Write a function that finds the largest possible product of any three numbers
//   from an array.

var largestProductOfThree = function(array) {
  if (array.length < 3) {return null}
  var largest = -Infinity;
  var length = array.length - 3;
  var getProducts = function(current, remaining) {
  if (remaining.length === length) {
    largest = Math.max(current, largest);
    return
  } else {
    for (var i = 0; i < remaining.length; i++) {
      getProducts (current * remaining[i], remaining.slice(0, i).concat(remaining.slice(i + 1)))
    }
  }
  }
  getProducts(1, array)
  return largest

}
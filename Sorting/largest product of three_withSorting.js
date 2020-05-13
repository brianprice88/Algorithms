// Write a function that finds the largest possible product of any three numbers
//   from an array.

var largestProductOfThree = function(array) {
  if (array.length < 3) {return null}
  var sorted = array.sort((a, b) => a > b ? 1 : -1)
  var maxIndex = sorted.length - 1;
  return Math.max(sorted[maxIndex] * sorted[maxIndex - 1] * sorted[maxIndex - 2], sorted[0] * sorted[1] * sorted[maxIndex])
}
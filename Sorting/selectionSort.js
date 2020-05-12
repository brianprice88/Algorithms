// start with leftmost element and replace it with the smallest element (if that element is smaller) in the remaining unsorted portion 
// keep doing this process until reaching the 2nd to last element (since last element will already be sorted after)
// time complexity: O(n^2)

var selectionSort = function(array) {
for (var i = 0; i < array.length - 1; i++) {
var val = array[i];
var min = Infinity;
var minIndex = 0;
  for (var j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
          min = array[j]
          minIndex = j
      }
  } 
  if (min < val) {
  array[i] = min;
  array[minIndex] = val
  }
}
return array;
}

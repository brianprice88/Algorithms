// Swap every pair of values in array if they are out of order.
// Keep doing this until you make it through the array without any swaps.
// time complexity: O(n^2)

var bubbleSort = function(array) {
var swaps = 0;
for (var i = 0; i < array.length - 1; i++) {
    var first = array[i];
    var second = array[i + 1];
    if (first > second) {
        array[i] = second;
        array[i+1] = first;
        swaps ++;
    }
}
if (swaps > 0) {bubbleSort(array)}
return array
}

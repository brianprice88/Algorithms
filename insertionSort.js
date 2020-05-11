/* Insertion sort iterates over an array, growing a sorted array behind the current location.
  It takes each element from the input and finds the spot, up to the current point,
  where that element belongs. It does this until it gets to the end of the array.
  */
 
  var insertionSort = function(array) {
   for (var index = 1; index < array.length; index++) { // start at index 1 since the first item is already sorted relative to the array 'behind' it
       const current = array[index];
       var spot = 0;
       while (current >= array[spot] && spot < index) { // iterate beginning at index 0 until the first value greater than current value (>= used because this is a stable sort)
           spot ++; // or if all values before the current value are smaller than it, we can keep it in its current place
       }
       array.splice(spot, 0, current) // add the value to the proper position
       array.splice(index + 1, 1) // and delete the value from its previous place (now index + 1 since we added an element)
   }
   return array
  }
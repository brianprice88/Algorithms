// Pick a random element and partition the array through a series of swaps
// such that elements less than partition come before and greater than it come after
// time complexity: O (n log(n)) average case, O (n^2) worse case depending on how close the pivot is to median of array

var swap = function(array, left, right) {
    let leftVal = array[left]
    let rightVal = array[right]
    array[left] = rightVal
    array[right] = leftVal
}

var partition = function(array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)] // pivot value is determined by midpoint of left and right pointers, whose defaults are the left and right ends of array
  while (left <= right) {
      while (array[left] < pivot) {left ++} // increment left pointer until we reach a value greater than the pivot
      while (array[right] > pivot) {right --} // decrement right pointer until we reach a value less than the pivot
      if (left <= right) { // assuming the pointers haven't crossed:
          swap(array, left, right) // swap their respective elements, so the one greater than the pivot moves to the right half and the one less than the pivot moves to the left
          left ++ // increment left pointer by 1 to the next element on left partition, and begin the process again (until left === right when we reach the pivot)
          right -- // decrement right pointer by 1 to the next element on right partition, and begin the process again (until left === right when we reach the pivot)
      }
  }
return left // by the time we reach here, the left partition values are less than the pivot and the right partition values are greater than it
}

var quickSort = function (array, left = 0, right = array.length - 1) {
  var index = partition(array, left, right) // index represents the end value of the left pointer from partitioning, which is essentially the midpoint of the array we just partitioned
  if (left < index - 1) { // now recursively quickSort the left partition from above
      quickSort(array, left, index - 1)
  }
  if (index < right) { // and recursively quickSort the right partition from above
      quickSort(array, index, right)
  }
return array
}
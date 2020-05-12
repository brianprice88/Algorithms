// Radix sort is a non-comparative sort that distributes elements into buckets based on their radix (significant digits)
// It repeats this for each significant digit (e.g. each digit in the number), and between each step concatenates the buckets back together
// time complexity: O(n * k), where k is length of the longest value, since we apply the sorting for each of its digits

var radixSort = function(array) {
const maxValue = Math.max(...array) // get the biggest value which will have the most digits
let numberOfSorts = Math.ceil(Math.log10(maxValue)) // determine the number of sorts needed, which is one for each digit of the biggest value
let sortsCompleted = 0; 

while (sortsCompleted < numberOfSorts) { // exit condition for once we've sorted through each digit
let buckets = Array(10).fill([]).map(row => []) // create a bucket for 0-9, representing possible digit values

for (var number of array) { // for each number, we get the current significant digit beginning with the right-most (ones place) and moving left
  let significantDigit = Math.floor((number / (10 ** sortsCompleted)) % 10); // Math.floor used to convert to 0 when we have decimal cases for smaller numbers (e.g. 5 after the first sort)
  buckets[significantDigit].push(number)
}

array = [];
for (var bucket of buckets) { // once the buckets have been filled with the array values based on their significant numbers, we concatenate them all back together
array = array.concat(bucket)
}

sortsCompleted ++ ;
}
return array
}

/*

example with [170, 45, 75, 90, 2, 802, 2, 66]
max 802 means we need three sorts
first sort places 170/90, 2/802/2, 45/75, 66 in their respective buckets
after concatenation we have [170, 90, 2, 802, 2, 45, 75, 66]
next sort goes by tens place (0 for numbers < 10)
this places 2/802/2, 45, 66, 170/75, 90 in their respective buckets
after concatenation we have [2, 802, 2, 45, 66, 170, 75, 90]
final sort is by hundreds place (0 for numbers < 100)
this places 2/2/45/66/75/90, 170/802 in their respective buckets
after concatenation we have the sorted array [2, 2, 45, 66, 75, 90, 170, 802]
with our exit condition met (three sorts completed), we are finished
*/
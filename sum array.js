// Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
// A single array item will count as a contiguous sum.

var sumArray = function(array) {
if (array.length === 0) {return 0}
if (array.length === 1) {return array[0]}
var maxSum = - Infinity;
var currentSum = 0;
var intervalStart = 0;

for (var i = 0; i < array.length; i++) {
	currentSum += array[i];
	maxSum = Math.max(maxSum, currentSum) // at each value, check if current sum is greater than max
	if (currentSum < 0) {currentSum = 0; intervalStart = i + 1} // once current interval sum is negative, reset it to zero and move up interval start pointer
}
return intervalStart === 0  ? currentSum : maxSum // return maxSum unless intervalStart is still 0, meaning currentSum has been increasing throughout array
}


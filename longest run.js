// Write a function that, given a string, Finds the longest run of identical
//   characters and returns an array containing the start and end indices of
//   that run. If there are two runs of equal length, return the first one.
//   For example:

var longestRun = function(string) {
	if (string.length === 0) {return null}

	var longStart = 0;
	var longEnd = 0;
	var longRun = 0;
	var currentStart = 0;
	var count = 1;

	for (var i = 1; i < string.length; i++) { // starting with index 1, check each value against previous value
		if (string[i] === string[i - 1]) { // if characters are same, increase count
			count ++;
			if (count > longRun) { // if current count is greater than longest count, update start/end indicies of longest run
				longRun = count;
				longStart = currentStart;
				longEnd = i;
			}
		} else { // if characters are not the same, count goes back to 1 (current character) which is the new start
			count = 1;
			currentStart = i
		}
	}
return [longStart, longEnd]
}
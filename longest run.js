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
	for (var i = 1; i < string.length; i++) {
		if (string[i] === string[i - 1]) {
			count ++;
			if (count > longRun) {
				longRun = count;
				longStart = currentStart;
				longEnd = i;
			}
		} else {
			count = 1;
			currentStart = i
		}
	}
return [longStart, longEnd]
}
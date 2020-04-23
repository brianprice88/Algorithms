// Given a sorted array that has been rotated some number of items right or
//   left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
//   how can you efficiently find an element? For simplicity, you can assume
//   that there are no duplicate elements in the array.

var rotatedArraySearch = function(rotated, target) {
	if (rotated.length === 0) {return null}
	if (rotated.length === 1) {return rotated[0] === target ? 0 : null}
	var left = 0;
	var right = rotated.length - 1;
	while (left <= right) {
	var midpoint = Math.floor((left + right) / 2)
	if (rotated[midpoint] === target) {return midpoint}
	if (rotated[left] <= rotated[midpoint]) { // this half is softed
		if (rotated[left] <= target && target < rotated[midpoint]) { // if target is in range, binary search
			right = midpoint - 1;
		} else {
			left = midpoint + 1; // otherwise binary search the other half
		}
	}
	else { // the other half must be sorted
		if (rotated[right] >= target && target > rotated[midpoint]) { // if target is in range, binary search
			left = midpoint + 1;
		} else { // otherwise binary search the other half
			right = midpoint - 1;
		}
	}

	}
	return null
}


[4, 5, 6, 0, 1, 2, 3]

[0, 1, 2, 3, 4, 5, 6]

[2, 3, 4, 5, 6, 0, 1]

[5, 6, 0, 1, 2, 3, 4]
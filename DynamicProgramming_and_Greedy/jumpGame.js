// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

// Dynamic programming solution:

var jumpGame = function (array) {

    var jumpTable = Array(array.length - 1).fill(null) // table to represent each index in the array and whether we can reach the end from there

    jumpTable[array.length - 1] = true // last value is true since if we're there, we're at the end

    for (var tableIndex = array.length - 2; tableIndex >= 0; tableIndex--) { // now fill in the rest of the table from right to left:

        let maxJump = Math.min( // max jump from this index will be the minimum of:
            array[tableIndex], // the value at that index (the max we can jump from that index)
            array.length - 1 - tableIndex // or however many spaces from the end we are (since we wouldn't need to jump past there, we don't need to go the full distance we can from that index)
        )

        for (var jumpLength = maxJump; jumpLength > 0; jumpLength--) { // now we check each jump we can make starting from max down to 1
            let nextSpace = tableIndex + jumpLength; // add possible jump value to the current index
            if (jumpTable[nextSpace] === true) { // if the landing spot represents a 'true' value in the table...
                jumpTable[tableIndex] = true; // then mark this index as 'true' since we can jump from here to another 'true' space (the last 'true' space being the end)
                break; // break out of the loop since we don't need to test the remaining jumps from this space: can move backward to the previous space
            }
        }
    }

    return jumpTable[0] === true // if index 0 is 'true', then it means there is at least one way to reach the end: jumping from index 0 we can find 'true' spots until the end
}

// Greedy solution: instead of using a table above, we just keep a single variable to reference 'true' and see if it gets from the end to zero

var jumpGame = function (array) {
    var end = array.length - 1; // initialize end ('true') as the last value, since we're successful if we've jumped here

    for (var index = end - 1; index >= 0; index--) { // starting from the space right before the end, we iterate to the beginning of the array
        if (index + array[index] >= end) { // if we can jump to the end (or beyond) from the current space:
            end = index; // we move the end variable to current space
        }
    }

    return end === 0; // if the end variable ends up at index 0, then it means we can jump from index 0 to the end
}

/* Variant on the same problem:
Now assume you can always reach the last index, and determine the minimum number of jumps needed to reach it
example: given [2,3,1,1,4]
answer is 2: jump 1 index from 2 to 3, then 3 to reach the end
*/

var jump = function (nums) {

    var jumps = 0; // number of jumps we've taken
    var farthest = 0; // farthest index we can jump to, from where we are
    var end = 0; // the index we last jumped to

    for (var index = 0; index < nums.length; index++) { // iterate through array
        if (end >= nums.length - 1) { // if we jumped to the end or beyond, exit
            break;
        }
        farthest = Math.max(farthest, index + nums[index]) // farthest we can jump is previous farthest or max distance we can jump from this square 
        if (index === end) { // if we've reached the spot we last jumped to, we have the farthest we can get from our last position
            jumps++ // jump to that position
            end = farthest // thus the new end is farthest
        }
    }
    return jumps;
}
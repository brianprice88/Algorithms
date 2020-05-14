// Given an array of integers representing an elevation map, compute how much water can be trapped after raining.
// example: [0,1,0,2,1,0,1,3,2,1,2,1]
// 1 (between 1-0-2) + 1 (between 2-1-0) + 2 (at value 0 between 2-1-0-1-2) + 1 (between 0-1-3) + 1 (between 2-1-2)
// from examples we can see that rainwater is trapped at an index only if it has at least one larger value both to its left and right
// if that is true, the amount of water trapped is determined by the smaller of the left/right bigger values
// example 1-0-2, 1 and 2 are both greater than 0, and 1 is less than 2, so 1 (1 - 0) is the amount of water trapped there
// we can determine total water by calculating the amount of water at each index and adding them

var rainWater = function (elevations) {
    let water = 0;
    for (var i = 1; i < elevations.length - 1; i++) { // ignore the left and right bound since they can't have any water trapped on them
        let leftMax = 0;
        let rightMax = 0;
        for (var x = 0; x < i; x++) { // calculate the tallest elevation before the current elevation
            leftMax = Math.max(leftMax, elevations[x])
        }
        for (var y = i + 1; y < elevations.length; y++) { // calculate the tallest elevation after the current elevation
            rightMax = Math.max(rightMax, elevations[y])
        }
        let minimumMax = Math.min(leftMax, rightMax); // determine the smaller of the tallest elevations before/after the current elevation
        if (minimumMax > elevations[i]) { // if this value is less than the current elevation, that difference is the amount of water that can be trapped at current elevation
            water += (minimumMax - elevations[i])
        }
    }
    return water;
}
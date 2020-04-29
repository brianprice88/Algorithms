var binarySearch = function (array, target) {
    if (!array || array.length === 0) { return null }
    var left = 0;
    var right = array.length - 1;
    while (left <= right) {
        var midpoint = Math.floor((left + right) / 2)
        if (array[midpoint] === target) {
            return midpoint;
        } else if (array[midpoint] > target) {
            right = midpoint - 1
        } else if (array[midpoint] < target) {
            left = midpoint + 1
        }

    }
    return null;
}
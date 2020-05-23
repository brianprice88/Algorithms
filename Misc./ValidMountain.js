// Given an array of integers, determine if it is a valid mountain such that:
// array length is at least 3, and
// there exists some 'peak' index before which all values are increasing and after which all values are decreasing

var isMountain = function (array) {
    if (array.length < 3) { return false }

    let index = 0;
    let length = array.length;

    while (index < length && array[index] < array[index + 1]) { // walk 'up' the mountain while values are increasing and we haven't reached the end yet
        index++;
    }

    if (index === 0 || index === length - 1) { //if we're stil at the beginning (there were no increasing values) or are at the end (there can be no decreasing values), it's not a mountain
        return false;
    }

    while (index < length && array[index] > array[index + 1]) { // walk 'down' the mountaing while values are decreasing
        index++
    }

    return index === length - 1 //if we're at the end of the mountain, it's a valid mountain

};
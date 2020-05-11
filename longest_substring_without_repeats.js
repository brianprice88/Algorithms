// Given a string, find the length of the longest substring without repeating characters.

var longestSubstring = function (string) {
    var indexMap = {}; // for each character in the string, we'll store the most recent index it appeared
    var startIndex = 0; // index that started the current substring
    var longestLength = 0;
    for (var i = 0; i < string.length; i++) {
        const currentChar = string[i];
        if (indexMap[currentChar] !== undefined && indexMap[currentChar] >= startIndex) { // if current char has appeared at an index after the current start index:
            startIndex = indexMap[currentChar] + 1 // new start index is updated to 1 after the current char last appeared
        } else {
            longestLength = Math.max(longestLength, i + 1 - startIndex) // otherwise update longest length if current interval is longer
        }
        indexMap[currentChar] = i; // update the character's most recent index in indexMap
    }
    return longestLength;
}
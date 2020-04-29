// Return an array with the power set of a given string.
//   Definition of power set: The set of all possible subsets including the empty set. 
//    1. All characters in a subset should be sorted.
//    2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
//   

var powerSet = function (str) {
  var set = [];

  var recurse = function (current, index) {
    set.push(current);
    for (var i = index; i < str.length; i++) {
      recurse(current + str[i], i + 1)
    }
  }
  recurse('', 0)
  return set
};	
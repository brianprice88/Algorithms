// Return an array with the power set of a given string.
//   Definition of power set: The set of all possible subsets including the empty set. 
//    1. All characters in a subset should be sorted.
//    2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
//   

var powerSet = function(str) {
var set = {};

var recurse = function(current, remaining) {
  set[current.split('').sort().join('')] = true;
  if (remaining.length === 0) {return}
  for (var i = 0; i < remaining.length; i++) {
    recurse(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1))
  }
}
recurse('', str)
return Object.keys(set);
};	
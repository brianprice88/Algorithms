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
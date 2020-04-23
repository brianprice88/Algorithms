var allAnagrams = function(string) {
	var results = new Set()
	var anagram = function (current, remaining) {
	if (remaining.length === 0) {
	  results.add(current)
	} else {
	  for (var i = 0; i < remaining.length; i++) {
	    anagram(current + remaining[i], remaining.slice(0, i) + remaining.slice(i +1))
	  }
	}
	}
	anagram('', string)
	return Array.from(results);
}
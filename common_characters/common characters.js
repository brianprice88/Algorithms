var commonCharacters = function(string1, string2) {
	var firstStringChars = {};
	let length = arguments.length;
	for (var i = 0; i < string1.length; i++) {
		firstStringChars[string1[i]] = 1;
	}
	
	var otherStrings = [...arguments].slice(1);

	otherStrings.forEach(function(string) {
		for (var i = 0; i < string.length; i++) {
		  if (firstStringChars[string[i]]) {
		  	firstStringChars[string[i]] ++
		  }
		}
	})
	
	var result = '';
	for (var key in firstStringChars) {
		if (firstStringChars[key] === length) {
			result += key
		}
	}
	return result;
}
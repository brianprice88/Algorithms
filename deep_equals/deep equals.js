var deepEquals = function (apple, orange) {
	if (Object.keys(apple).length !== Object.keys(orange).length) {return false};
	for (var key in apple) {
	  if (typeof apple[key] !== 'object') {
	    if (apple[key] !== orange[key]) {
	    return false
	    }
	  } else {
	    return deepEquals(apple[key], orange[key])
	  }
	}
	return true;
}
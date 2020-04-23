// Write a function that, given two objects, returns whether or not the two
//   are deeply equivalent--meaning the structure of the two objects is the
//   same, and so is the structure of each of their corresponding descendants.

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
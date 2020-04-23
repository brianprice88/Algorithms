var bind = function(func, context) {
	var args = [...arguments].slice(2)
	return function () {
	  var newArgs = args.concat([...arguments])
	  return func.apply(context, newArgs)
	}
}



Function.prototype.bind = function(context) {
	var func = this;
	var args = [...arguments].slice(1)
	return function () {
	  var newArgs = args.concat([...arguments])
	  return func.apply(context, newArgs)
	}

};

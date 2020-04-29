// Build a class to represent a range of numbers that takes:
//    - a beginning index,
//    - an end index (optional)
//      If there is no end index, the range should include only the passed-in start value.
//    - a 'step' (optional)
//      The step is the interval at which elements are included.
//      For instance, a step of 1 includes every element in the range,
//      while a step of 2 includes every other element.
// 
//  The range should have a constructor that accepts these arguments in that order.
// 
//  It should also support the following utility functions:
//    - size(): return the number of items represented by the range
//    - each(callback(index)): iterate over the range, passing each value to a callback function
//    - includes(index): return whether or not the range includes the passed value
// 
//  You should also be aware of the following caveats:
//    - You should allow a negative value for 'step' to count backwards.
//    - If no step is provided, it should default to 1.
//    - If the start value is greater than the end value, assume we're counting backwards.
//    - Should return null if we are given no 'start' value.

var Range = function(start, end, step) {
if (arguments.length === 0) {return null};
this.values = [];
if (arguments.length === 1) {this.values.push(start)}
if (arguments.length === 2) {
	if (start <= end) {
	  for (var i = start; i <= end; i++) {
	  	this.values.push(i)
	  }
	} else if (start > end) {
		for (var i = start; i >= end; i--) {
		  this.values.push(i)
		}
	}
}
if (arguments.length === 3) {
	if (start <= end) {
	  for (var i = start; i <= end; i+= Math.abs(step)) {
	  	this.values.push(i)
	  }
	} else if (start > end) {
		for (var i = start; i >= end; i-= Math.abs(step)) {
		  this.values.push(i)
		}
	}
}
};

Range.prototype.size = function () {
return this.values.length;
};

Range.prototype.each = function (callback) {
	for (var i = 0; i < this.values.length; i++) {
		callback(this.values[i])
	}
};

Range.prototype.includes = function (val) {
  return this.values.includes(val)

};

var range = new Range(1);
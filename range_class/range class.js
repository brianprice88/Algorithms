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
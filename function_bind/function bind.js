// function bind():
//  
//   example 1:
//  
//   var alice = {
//     name: 'alice',
//     shout: function(){
//       alert(this.name);
//     }
//   }
//   var boundShout = bind(alice.shout, alice);
//   boundShout(); // alerts 'alice'
//   boundShout = bind(alice.shout, {name: 'bob'});
//   boundShout(); // alerts 'bob'
//  
//   example 2:
//  
//   var func = function(a, b){ return a + b };
//   var boundFunc = bind(func, null, 'foo');
//   var result = boundFunc('bar');
//   result === 'foobar'; // true

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

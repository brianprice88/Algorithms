
// asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
//  Each of the tasks receives a task-specific callback that must be invoked when the task completes.
//  The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
// 
//  The order of these results should be the same as the order of the tasks.
//  It is important to note that this is not the order in which the tasks return,
//  but the order in which they are passed to asyncMap.
// 
//  Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
//  on the results array.

// Example:
//  
//   asyncMap([
//   function(cb){
//      setTimeout(function(){
//        cb('one');
//      }, 200);
//    },
//    function(cb){
//      setTimeout(function(){
//        cb('two');
//      }, 100);
//    }
//   ],
//    function(results){
//      // the results array will equal ['one','two'] even though
//      // the second function had a shorter timeout.
//      console.log(results); // ['one', 'two']
//   });




var asyncMap = function(tasks, callback) {
	let results = [];
	let tasksComplete = 0;
	for (let i = 0; i < tasks.length; i++) {
	  var cb = function (result) {
	    results[i] = result;
	    tasksComplete ++;
	    if (tasksComplete === tasks.length) {
	    callback(results)
	    }
	    }
	tasks[i](cb)
	}
}

//alternate solution using promises

var asyncMap = function(tasks, callback) {
	var results = [];
	for (let i = 0; i < tasks.length; i++) {
	  results[i] = new Promise(tasks[i])
	}
	Promise.all(results)
	.then(promises => callback(promises))
}
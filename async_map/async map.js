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

var asyncMap = function(tasks, callback) {
	var results = [];
	for (let i = 0; i < tasks.length; i++) {
	  results[i] = new Promise(tasks[i])
	}
	Promise.all(results)
	.then(promises => callback(promises))
}
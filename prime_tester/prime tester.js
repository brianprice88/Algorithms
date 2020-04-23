var primeSieve = function (n) {
var all = [];
var results = [];

for (var i = 0; i < n; i++) {
	all.push(true) // array of true where indexes correspond to 0 through n - 1
}

all[0] = false;
all[1] = false; // 1 and 0 aren't prime

for (var i = 2; i <= Math.sqrt(n); i++) { // from 2 to square root of max...
	if (all[i] === true) { // if number is true, then keep adding it to itself until number (e.g. 2 + 2 + 2 + 2...), and each multiple is false
		for (var j = i * i; j < n; j += i) {
			all[j] = false
		}
	}
}

for (var i = 0; i < n; i++) { // now check all numbers to see which are still true: those are prime
	if (all[i] === true) {
		results.push(i)
	}
} 

return results;
};
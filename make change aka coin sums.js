// How many ways to make change from these denominations?
// 1p piece
// 2p piece
// 5p piece
// 10p piece
// 20p piece
// 50p piece
// £1 (100p)
// £2 (200p)

var makeChange = function(total) {
	var options = [1, 2, 5, 10, 20, 50, 100, 200];
	var ways = 0;

	var change = function(index, amountRemaining) {
	  var currentCoin = options[index];
	  if (index === 0) {
	    if (amountRemaining % currentCoin === 0) {
	  	ways ++
	  }
	  return;
	  }
	  while (amountRemaining >= 0) {
	  change(index - 1, amountRemaining);
	  amountRemaining -= currentCoin;
	  }

	  }
	change(options.length - 1, total)
	return ways
}

//dynamic programming:

var change = function(total) {
  var options = [1, 2, 5, 10, 20, 50, 100, 200];

  var dp = []
  dp[0] = 1;

  for (var i = 0; i < options.length; i++) {
  	for (var j = options[i]; j <= total; j++) {
  		dp[j] = (dp[j] || 0) + (dp[j - options[i]] || 0)
  	}
  }
return dp[total]
}
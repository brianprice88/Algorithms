// How many ways to make change from these denominations?
// 1p piece
// 2p piece
// 5p piece
// 10p piece
// 20p piece
// 50p piece
// £1 (100p)
// £2 (200p)

var change = function (total) {
  var options = [1, 2, 5, 10, 20, 50, 100, 200];

  var dp = [] // create an array to hold the number of combos possible for each amount
  dp[0] = 1; // only one way to make amount 0

  for (var i = 0; i < options.length; i++) { // for each coin of the options, we want to calculate how many ways we can reach total amount using that coin
    for (var j = options[i]; j <= total; j++) { // checking at each amount up to total, but starting with the current coin's value (since no way to reach a total less than that coin's value)
      dp[j] = (dp[j] || 0) + (dp[j - options[i]] || 0) // update the total combos to reach the current amount (j) based on current coin (options[i]): 
    }  // we add to the current dp value (from previous coins we've calculated): add the dp array's value at current amount minus value of this coin
  } // for example consider amount 5 in dp table.  When i = 0 (coin is 1), all values in dp will be 1 (only 1 way to make amount with only 1).  At i=1(coin=2), dp[5] = dp[5] + dp[5-2] = 3.  At i=2(coin=5), dp[5] = dp[5] + dp[5-5] = 4
  
  return dp[total] // return the dp array's value at the target amount
}
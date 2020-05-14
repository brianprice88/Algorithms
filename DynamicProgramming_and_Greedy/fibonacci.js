var fibonacci = function (n) {
    if (n < 0) { return null }
    let fibs = Array(n + 1)
    fibs[0] = 0;
    fibs[1] = 1;
    for (var i = 2; i < fibs.length; i++) {
        fibs[i] = fibs[i - 2] + fibs[i - 1]
    }
    return fibs[fibs.length - 1]
}

// the climbing stairs problem is an application of the fibonacci sequence using dynamic programming:
// You are climbing a stair case. It takes n steps to reach to the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var stairs = function(n) {
  let dp = Array( n + 1)
  dp[0] = 1 // because there is 1 way to reach the step you're starting on
  dp[1] = 1 // because you can climb to the first step 1 way
  dp[2] = 2 // because you can climb to the second step 2 ways
  if (n > 2) {
  let currentStep = 3;
  while (currentStep < dp.length) {
      dp[currentStep] = dp[currentStep - 1] + dp[currentStep - 2] // each successive step, the number of ways to reach there is the sum of the number of ways to reach the previous two steps
      currentStep ++
  } 
}
  return dp[n]
}
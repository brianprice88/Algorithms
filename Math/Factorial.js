// Basic Factorial Implementation

var factorialRecursive = function (number) {
if (number === 0 || number === 1) {return 1}
return number * factorial(number - 1)
}

var factorialMemoized = function (number) {
const memo = [1, 1]
if (memo[number]) {return memo[number]}
else {memo[number] = number * factorialMemoized(number - 1)}
return memo[number]
}

// determine how many trailing zeroes are in a number's factorial
// e.g. 5! = 120 so 1 trailling 0

var factorialTrailingZeroes = function (number) {
  let zeroes = 0;
  
  for (var i = 5; i <= number; i+= 5) { // trailing 0s come from multiplying 2 by 5 (and multiples of such)
    let num = i; // but we only need to determinethe number of 5s since there will be fewer of those
    while (num % 5 === 0) { // thus for each multiple of 5 up to and including the given number:
        num /= 5; // we can add a trailing zero for each 5 that goes into that multiple (e.g. with 25 there are two additional trailing zeroes)
        zeroes ++
    }
  }

  return zeroes;
}
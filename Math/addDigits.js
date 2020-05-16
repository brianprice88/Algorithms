// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// ex 38 = 11 (3 + 8) = 2 (1 + 1)
// ex 27 = 9 (2 + 7)
// ex 90 = 9
// ex 104 = 5 (1 + 5)
// pattern: numbers divisible by 9 end up with sum of 9 (27, 90)
// whereas other numbers end up with a sum of their remainder divided by 9 (38 & 9 = 2, 104 % 9 = 5)

var addDigits = function (number) {
    if (number < 10) { return number }
    else { return number % 9 === 0 ? 9 : number % 9 }
}
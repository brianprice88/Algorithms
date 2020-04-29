// Given a positive integer, return its digits reversed. 

var reverseInteger = function(number) {
var totalDigits = Math.floor(Math.log10(number));
var reversed = 0;
while (totalDigits >= 0) {
var lastDigit = number % 10;
var multiplier = 10 ** (totalDigits)
reversed += (lastDigit * multiplier);
number = Math.floor(number / 10)
totalDigits -= 1;
}
return reversed
}

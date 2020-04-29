// Write a function that takes a number as its argument and 
//  returns a string that represents that number's simplified fraction.

var toFraction = function(number) {
var result = number >= 0 ? 'positive' : 'negative';
number = Math.abs(number);
var power = 0;
while (Math.trunc(number) !== number) {
	number *= 10;
	power ++;
}
var numerator = number;
var denomenator = 10**(power)
var greatestCommonFactor = 1;
if (numerator > denomenator) {
  for (var i = denomenator; i > 1; i--) {
  	if (numerator % i === 0 && denomenator % i === 0) {greatestCommonFactor = i; break;}
  }
} else if (denomenator > numerator) {
  for (var i = numerator; i > 1; i--) {
  if (denomenator % i === 0 && numerator % i === 0) {greatestCommonFactor = i; break;}
  }
}
numerator /= greatestCommonFactor;
denomenator /= greatestCommonFactor;

return result === 'positive' ? `${numerator}/${denomenator}` : `-${numerator}/${denomenator}`
};
// Write a function that takes up to four digits of a phone number, and
//    returns a list of all of the words that can be written on the phone with
//    that number. (You should return all permutations, not only English words.)

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  var output = [];
  var words = function(currentString, digitsRemaining) {
    if (currentString.length === digitString.length) {
      output.push(currentString);
      return;
    } else {
      var currentDigit = digitsRemaining[0];
      var currentOptions = phoneDigitsToLetters[currentDigit];
      for (var i = 0; i < currentOptions.length; i++) {
        words(currentString + currentOptions[i], digitsRemaining.slice(1))
      }
      }
  }
  words('', digitString);
  return output;
};
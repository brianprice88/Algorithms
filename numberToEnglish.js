// Convert a non-negative integer to its English representation, e.g. 123 -> 'One Hundred Twenty Three'

var numbersToWords = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
};
var numbersToPlace = {
    10: 'Ten',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
    1000000000000: 'Trillion',
    1000000000000000: 'Quadrillion',
    1000000000000000000: 'Quintillion',
};


var numberToWords = function (number) {
    var place, numberInPlace, numberLeft;
    var output, restOfString
    if (numbersToWords[number]) { // numbers 1-19 or multiple of 10 < 100 are just direct lookup
        output = numbersToWords[number];
    } else if (number < 100) { // number < 100 can be broken into tens plance and ones place for direct lookups
        tensPlace = Math.floor(number / 10);
        onesPlace = number % 10;
        output = numbersToWords[tensPlace * 10] + ' ' + numbersToWords[onesPlace];
    } else { // number > 100 will require recursion to build out the number string place-by-place
        if (number < 1000) {
            place = 100;
        } else {
            place = 1000;
            while (place * 1000 <= number) { // if number > 1 million
                place *= 1000;
            }
        }
        numberInPlace = Math.floor(number / place); // number of max power of ten in value (e.g. 9 if number was 9 million 105)
        numberLeft = number % place; // leftover from subtracting the above (e.g. 105 if numer was 9 million 105)
        output = numberToWords(numberInPlace) + ' ' + numbersToPlace[place]; // add to output the amount from numberInPlace
        restOfString = numberToWords(numberLeft); // recurse through numberLeft and add that to output until 'zero' remains
        if (restOfString !== 'Zero') {
            output += ' ' + restOfString;
        }
    }  
    return output;
};
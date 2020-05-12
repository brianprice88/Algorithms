// convert a Roman numeral (as a string) to its integer equivalent

var romanToInt = function(s) {
    const values = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }

    var number = 0;
    for (var i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i+1];
        if (values[current+next] !== undefined) {
            number += (values[current + next]);
            i ++
        } else {
            number += values[current]
        }
    }
    return number;
};

// convert an integer to its Roman numeral equivalent

var intToRoman = function(num) {
    var output = '';
    while (num > 0) {
    if (num >= 1000) {
       output += 'M';
        num -= 1000;
    }
    else if (num >= 900) {
        output += 'CM';
        num -= 900;
    }
    else if (num >= 500) {
        output += 'D';
        num -= 500;
    }
    else if (num >= 400) {
        output += 'CD';
        num -= 400;
    }
    else if (num >= 100) {
        output += 'C';
        num -= 100;
    }
    else if (num >= 90) {
        output += 'XC';
        num -= 90;
    }
    else if (num >= 50) {
        output += 'L';
        num -= 50;
    }
   else if (num >= 40) {
        output += 'XL';
        num -= 40;
    }
    else if (num >= 10) {
        output += 'X';
        num -= 10;
    }
    else if (num >= 9) {
        output += 'IX';
        num -= 9;
    }
   else if (num >= 5) {
       output += 'V';
        num -= 5; 
    }
    else if (num >= 4) {
       output += 'IV';
        num -= 4; 
    }
   else if (num >= 1) {
        output += 'I';
        num -= 1;
    }
    }
 return output   
};
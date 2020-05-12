var cubeRoot = function (number) {
    var firstTenCubes = [];
    for (var i = 0; i <= 9; i++) {
        firstTenCubes[i] = [i, i * i * i]
    }

    if (number < 1000) { // cube roots 0-9 will have cubes < 1000
        for (var i = 0; i < firstTenCubes.length; i++) {
            if (firstTenCubes[i][1] > number) {
                return firstTenCubes[i - 1][0];
            }
        }
        return 9
    }
    // for cube roots 10 - 99:
    
    let firstPart = number / 1000; // first take everything but the last three digits
    let firstDigit;
    for (var i = 0; i < firstTenCubes.length; i++) { // find the greatest number 0 - 9 whose cube root is <= this
        if (firstTenCubes[i][1] > firstPart) {
            firstDigit = firstTenCubes[i - 1][0]; // that number is first digit in cube root
            break;
        }
    }
    if (firstDigit === undefined) { firstDigit = 9 } // if we didnt hit a number in the loop, it means first digit is 9

    let lastDigit;
    for (var i = 0; i < firstTenCubes.length; i++) { 
        if (firstTenCubes[i][1] % 10 === number % 10) { // find number 0-9 whose cube's last digit is the same as number's last digit
            lastDigit = firstTenCubes[i][0]; // that number is second digit in cube root
            break;
        }
    }

    return firstDigit * 10 + lastDigit
}

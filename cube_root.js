var cubeRoot = function (number) {
    var firstTenCubes = [];
    for (var i = 0; i <= 9; i++) {
        firstTenCubes[i] = [i, i * i * i]
    }

    if (number < 1000) {
        for (var i = 0; i < firstTenCubes.length; i++) {
            if (firstTenCubes[i][1] > number) {
                return firstTenCubes[i - 1][0];
            }
        }
        return 9
    }

    let firstPart = number / 1000;
    let firstDigit;
    for (var i = 0; i < firstTenCubes.length; i++) {
        if (firstTenCubes[i][1] > firstPart) {
            firstDigit = firstTenCubes[i - 1][0];
            break;
        }
    }
    if (firstDigit === undefined) { firstDigit = 9 }

    let lastDigit;
    for (var i = 0; i < firstTenCubes.length; i++) {
        if (firstTenCubes[i][1] % 10 === number % 10) {
            lastDigit = firstTenCubes[i][0];
            break;
        }
    }

    return firstDigit * 10 + lastDigit
}

/*
To find the cube root for anything 10-99
first take everything but the last three digits, and find greatest the number 0 - 9 whose cube root is <= this
that number is first digit in cube root
then find number 0-9 whose cube's last digit is the same as input number's last digit
that number is second digit in cube root


*/
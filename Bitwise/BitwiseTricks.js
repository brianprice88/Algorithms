var isEven = function (number) {
    return number & 1 // even numbers' last bits will always be 0, and odd numbers' will be 1
} // thus we're just checking if input number's last bit is 0 or 1

var inverseOfNumber = function (number) { // switch the sign of a number
    return ~number + 1 // because negative numbers are represented by a leading 1 and positive a leading 0
} // 1 = 0001 -> ~1 = 1110 -> ~1 + 1 = 1111 (-1); -1 = 1111; ~ -1 = 0000; ~ -1 + 1 = 0001

var isPositive = function (number) {
    return (number >> 31) & 1 === 0 // since positive number has 0 as its leftmost bit, shifting it 31 bits (or however many bits the number is)
} // whereas negative has a leading 1 and thus the shift will maintain the 1 (1 & 1 !== 0)

var isPowerOfTwo = function (number) { // for a power of 2 that is >= 0
    return number & (number - 1) === 0 // for powers of 2, there will always be only 1 filled bit at the end, whereas that number - 1 will have all its other bits filled
}

var bitPositionValue = function (number, bitPosition) {
    return (number >> bitPosition) & 1 // given a bit position, returns whether the value there is 0 or 1
} // 5 = 101; (5 >> 0) & 1 is 1, (5 >>1) & 1 is 0, (5 >>2) & 1 is 1

var sumNumbers = function (a, b) { // recursively sum numbers without using addition
    if (b === 0) { return a }
    else {
      return sumNumbers(a ^ b, (a & b) << 1)
    }
}

var swapValues = function (x, y) { // swap the values of x and y with each other
    x = x ^ y;
    y = x ^ y;
    x = x ^ y;
    return [x, y]
}

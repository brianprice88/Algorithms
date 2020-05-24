// given a positive integer N, determine whether it is a power of another integer P
// for example given N = 27 and P = 3, return true

var isPowerOf = function (N, P) {
    if (N === 1) { return true } // anything to the 0th is 1
    if (P === 1) { return N === 1 } // 1 to any power is 1, so this is only true if N is also 1
    let converted = N.toString(P) // convert N to base P, which will always have a leading 1 bit and all 0s after
    if (converted[0] !== '1') { return false } // thus just check if the first bit is 1
    return Number(converted.slice(1)) === 0; // and check if everything after that is 0
}
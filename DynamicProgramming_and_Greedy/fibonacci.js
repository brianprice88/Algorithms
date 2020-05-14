var fibonacci = function (n) {
    if (n < 0) { return null }
    let fibs = Array(n + 1)
    fibs[0] = 0;
    fibs[1] = 1;
    for (var i = 2; i < fibs.length; i++) {
        fibs[i] = fibs[i - 2] + fibs[i - 1]
    }
    return fibs[fibs.length - 1]
}
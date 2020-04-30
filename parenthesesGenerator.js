// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

var parentheses = function (n) {
    var results = [];

    var generator = function (left, right, current) {

        if (left === n && right === n) { // if we've accumulated n left and right parens, add to the results
            results.push(current);
            return
        }

        if (left < n) { // if we have fewer than n left parentheses, add a left parens and re-run the function
            generator(left + 1, right, current + '(')
        }

        if (right < left) { // if we have fewer right than left parentheses (since we can't add more right than left), add a right parens and re-run the function
            generator(left, right + 1, current + ')')
        }

    }

    generator(0, 0, '') // initialize the function with empty string and 0 left/right parens added

    return results;
}
// Given a string, find the longest palindromic substring

var longestPalindrome = function (s) {
    let longest = '';

    for (var i = 0; i < s.length; i++) { // check for palindromes with a single character center e.g. 'aba'.  Assume 'b' is a palindrome
        let left = 0;
        let right = 0;
        while (s[i - left] && s[i - left] === s[i + right]) { // expand left/right one at a time and check for equality (first condition is that both values aren't undefined which would give a false positive)
            if ((i + right + 1) - (i - left) > longest.length) { // compare current palindrome length with longest
                longest = s.slice(i - left, i + right + 1)
            }
            left++;
            right++
        }
    }

    for (var i = 0; i < s.length; i++) { // check for palindromes with a double character center e.g. 'abba
        let left = 0;
        let right = 0;
        while (s[i - 1 - left] && s[i - 1 - left] === s[i + right]) { // expand left/right one at a time and check for equality
            if ((i + right + 1) - (i - 1 - left) > longest.length) { // compare current palindrome length with longest
                longest = s.slice(i - 1 - left, i + right + 1)
            }
            left++;
            right++;
        }
    }

    return longest;
}

// based on the repeated operations above (looping through first for single char centers and then again for double char centers), we can reduce the above to the below:

var longestPalindromeOptimized = function(s) {
    let longest = '';

    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j <= 1; j++) { // instead of a re-iterating through the whole string to check for two-character centered palindromes, just do it here
            let left = 0;
            let right = 0;
            while (s[i - j - left] && s[i - j - left] === s[i + right]) {
                if ((i + right + 1) - (i - j - left) > longest.length) {
                    longest = s.slice(i - j - left, i + right + 1)
                }
                left ++;
                right ++
            }
        }
    }

    return longest;
}
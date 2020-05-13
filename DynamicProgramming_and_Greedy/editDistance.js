// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

var minDistance = function (word1, word2) {
    if (!word1) { return word2.length }
    if (!word2) { return word1.length }

    var matrix = []
    for (var i = 0; i <= word1.length; i++) { //initialize top row of matrix from 0-word1length (inclusive since index 0 is empty and word starts at index 1)
        matrix[i] = [i]
    }
    for (var j = 0; j <= word2.length; j++) { //initialize left column of matrix from 0-word2length (inclusive since index 0 is empty and word starts at index 1)
        matrix[0][j] = j
    }


    for (var i = 1; i <= word1.length; i++) { // fill out rest of matrix starting at [1, 1]
        for (var j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) { // if word1/word2 were same at prev i/j values (respectively), carry that matrix value to this square
                matrix[i][j] = matrix[i - 1][j - 1]
            } else { // if word1/word2 weren't same at prev i/j values (respectively), this matrix value is fewest cumulative edits from prev squares left/up/left&up, plus 1 for an additional operation
                var minPrev = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1])
                matrix[i][j] = minPrev + 1
            }
        }
    }
    return matrix[word1.length][word2.length] // bottom right corner of matrix represents total number of operations

};


// Example below of how the matrix is built out from starting with just top row/left column, unti we reach bottom right which is answer

/*
   '' H E L L O
''  0 1 2 3 4 5
H   1 0 1 2 3 4
I   2 1 1 2 3 4
Y   3 2 2 2 3 4
A   4 3 3 3 3 4

*/
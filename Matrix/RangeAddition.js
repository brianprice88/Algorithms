// Given an m * n matrix and an array 'operations' in which operation represents a tuple
// And that tuple represents a range of the matrix from [0,0] up to but not including the tuple's values
// Each operation adds 1 to every value in the range of the operation
/* Example given m and n = 3, operations = [[2, 2], [3,3]]
[
[0,0,0]
[0,0,0]
[0,0,0]
]
first operation:
[
[1,1,0]
[1,1,0]
[0,0,0]
]
second operation:
[
[2,2,1]
[2,2,1]
[1,1,1]
]
after all operations, determine how many squares in the matrix have the maximum value
in this case, max m is 2 and 4 squares have that value
*/

// we don't have to perform the calculations on each square and then iterate through the matrix to examine them
// since each operation's affected range starts from the top left, we just need to keep track of the portion of the matrix affected by all operations
// we initialize that to the matrix dimensions m * n
// then for each operation, reduce m and n to the region affected by that operation's m and n
// eg first operation [2, 2] reduces the area with largest value squares to [2, 2]
// and then [3, 3] affects a bigger portion of the matrix, so the largest value squares remain [2, 2]


var maxCount = function (m, n, operations) {
    for (var operation of operations) {
        m = Math.min(m, operation[0])
        n = Math.min(n, operation[1])
    }
    return m * n
}
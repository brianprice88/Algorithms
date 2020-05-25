/*
Given a knapsack that can hold a certain amount of weight, as well as a set number of items where each has an assigned weight and value
Determine the maximum total value you can accumulate without exceeding the weight limit
Note that you must put a full item in the bag (you can't put part of an item)
Also assume you only have one quantity of each item
example items:
[{weight: 1, val: 1}, {weight: 3, val: 4}, {weight: 4, val: 5}, {weight: 5, val: 7}]
and total weight limit of 7
*/

var knapsack = function (items, maxWeight) {

    let dp = Array(items.length).fill([]).map(row => Array(maxWeight + 1).fill(null)) // initialize a dp table with one row for each item and one column for each weight 0 through maxWeight

    for (var i = 0; i < dp.length; i++) { // initialize leftmost column to 0 since no items could be placed in knapsack of weight 0
        dp[i][0] = 0;
    }

    for (var i = 0; i < items.length; i++) { // now we can fill in the dp table one row (item) at a time
        for (var j = 1; j <= maxWeight; j++) { // and for each item, filling in each weight from 1 through maxWeight
            if (dp[i - 1] === undefined) { // for the top row (no row above it)
                dp[i][j] = items[i].val; // max value at any weight will just be adding the first item to the knapsack, and nothing more
                continue;
            }
            if (items[i].weight > j) { //if the current item's weight exceeds max weight available, we can't fit this item
                dp[i][j] = dp[i - 1][j] // thus the max value available is the max value from the previous row
            } else { // if the current item's weight is <= max available weight, then max value at this weight is either max value from not including the item (the cell above)
                dp[i][j] = Math.max(dp[i - 1][j], items[i].val + dp[i - 1][j - items[i].weight]) // OR the sum value from included the item as well as the max value available with the remaining weight (from the row above)
            }
        }
    }
    return dp[i - 1][j - 1] // the bottom right square represents max value for all items at max weight
}


/*
Example dp table:

(val) wt  0  1  2  3  4  5  6  7
(1)   1   0  1  1  1  1  1  1  1  --> if we only used the weight 1 item, max value for all weights would be 1
(4)   3   0  1  1  4  5  5  5  5  --> with subsequent rows, while the item's weight is greater than the max weight, the best we can do at a given max weight is the cell directly above (not including this item)
(5)   4   0  1  1  4  5  6  6  9  --> once we reach a max weight that could hold the current item, the best max value we can get is the max of the cell directly above (not including this item)
(7)   5   0  1  1  4  5  7  8  9  --> OR the value if we did include the item (the item's value) + the best value from the row above relative to the remaining weight left in the bag
                                 --> e.g. for max weight 7 and item with weight 5, we could either take the max value for item weight 4 at max weight 7 (cell directly above), or the value of weight 5 + the max value for item weight 4 at max weight 2 (7 - 5)
*/
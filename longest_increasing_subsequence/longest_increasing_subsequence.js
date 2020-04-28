// Given an unsorted array of integers, find the length of longest increasing subsequence (integers need not be contiguous)

var lengthOfLIS = function (nums) {
    if (nums.length === 0) { return 0 }

    var sequences = Array(nums.length).fill(1) // array to keep track of LIS at each index: initialize to 1 since each number is itself a min LIS

    let prevIndex = 0;
    let currentIndex = 1

    while (currentIndex < nums.length) { // until currentIndex reaches end of array
        if (nums[prevIndex] < nums[currentIndex]) { //if current element is bigger than previous one
            var newLength = sequences[prevIndex] + 1 
            if (newLength > sequences[currentIndex]) {// then increase LIS at this value only if it would be greater than already existing LIS here
                sequences[currentIndex] = newLength
            }
        }

        prevIndex++; // shift prevIndex right

        if (prevIndex === currentIndex) { // if prevIndex has reached current index then we've tried all values in array before this value to see what greatest LIS would be
            currentIndex++ // move current to next index and prevIndex back to zero
            prevIndex = 0;
        }
    }



    return Math.max(...sequences) // return largest value in sequences array


}
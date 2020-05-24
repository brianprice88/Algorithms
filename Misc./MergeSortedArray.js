/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
You are given extra buffer space in nums1, which will be exactly enough to fit all of nums2's elements
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
--> [1,2,2,3,5,6]
*/

var merge = function (nums1, m, nums2, n) {

    let nums1Index = m - 1; // last index of nums1 non-buffer
    let nums2Index = n - 1; // last index of nums2
    let totalIndex = m + n - 1 // last index of combined nums1/nums2

    while (nums2Index >= 0) { // while nums2 has elements remaining
        if (nums1Index >= 0 && nums1[nums1Index] > nums2[nums2Index]) { // if nums1 still has elements remaining and nums1 value > nums2 value
            nums1[totalIndex] = nums1[nums1Index] // add nums1 value at end of non-buffered nums1 array
            nums1Index--
        } else {
            nums1[totalIndex] = nums2[nums2Index] // otherwise add nums2 value at end of non-buffered nums1 array
            nums2Index--
        }
        totalIndex-- // and move one index back in the non-buffer nums1
    }

  return nums1
};
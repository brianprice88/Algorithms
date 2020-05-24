/*
Given two rectangles each represented by the coordinates of their bottom-left and top-right corners:
[0,0,2,2] -> bottom left corner is (0,0) and top right is (2,2)
[1,1,3,3] -> bottom left corner is (1,1) and top right is (3,3)
determine if the rectangles overlap, meaning the area of their intersection is positive (not just that they touch at the corner or edges)
*/

/*
We can think of this as checking whether the rectangles overlap at all, then taking the opposite of that.
The four ways rec1 does not intersect with rec2 (not that >= / <= since intersection at edges/corners doesn't count as overlap)
rec1 above rec 2: rec1[1] >= rec2[3]
rec1 below rec 2: rec1[3] <= rec2[1]
rec1 to the left of rec 2: rec1[2] <= rec2[0]
rec1 to the right of rec 2: rec1[0] >= rec2[2]

*/

var isRectangleOverlap = function (rec1, rec2) {
  return !(rec1[1] >= rec2[3] || rec1[3] <= rec2[1] || rec1[2] <= rec2[0] || rec1[0] >= rec2[2])
};
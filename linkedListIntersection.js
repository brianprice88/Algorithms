// Write a function linkedListIntersection that returns the node 
//  at which the intersection of two linked lists begins, 
//  or null if there is no such intersection.

var linkedListIntersection = function(list1, list2) {
if (!list1.head || !list2.head) {return null}

var first = list1.head;
var second = list2.head;

while (first !== second) { // when either pointer reaches end of list, start it at beginning of other list and pointers will then intersect if there is intersection
if (first === null) {
    first = list2.head;
    second = second.next
} else if (second === null) {
    second = list1.head;
    first = first.next
} else {
    first = first.next;
    second = second.next;
}
}
return first; // this will still return null even lists don't intersect: first === second === null

}
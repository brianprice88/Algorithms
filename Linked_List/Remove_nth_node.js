// Given a linked list head and a number n, remove the n-th node from the end of list and return its head.

var ListNode = function(val) {
    this.val = val;
    this.next = null;
}

var removeNthNodeFromEnd = function(head, n) {

let dummyHead = new ListNode(0); // create a dummy head so we can reference the list in case we have to remove the current head
dummyHead.next = head;

var firstPointer = head;
var secondPointer = head;
var secondMoves = 0;

while (secondMoves < n + 1) { // move second pointer n + 1
    secondPointer = secondPointer.next;
    secondMoves ++;
}

while (secondPointer !== null) { // now we can move first and second pointers together until second pointer reaches null
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
}

firstPointer.next = firstPointer.next.next; // pointer one will be at the node before the one we want removed
return dummyHead.next;

}

/*
example linked list: we are asked to remove node n = 2 from end (4 below)
1 -> 2 -> 3 -> 4 -> 5

we can know when a pointer reaches the end of the list (node is null)
thus we want pointer two to hit that when pointer one hits 3 (the node before the target)
working backwords we see pointer one starts moving when pointer two is at 4
pointer two thus went three spaces (n + 1) prior to pointer one moving
*/
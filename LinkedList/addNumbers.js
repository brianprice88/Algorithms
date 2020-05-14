/* 
given two non-empty linked lists representing two non-negative integers,
where the digits are stored in reverse order and each node contains a single digit
add the numbers and return it as a linked list with its numbers reversed
example:
2 --> 4 --> 3 (342) +  
5 --> 6 --> 4 (465) = 
7 --> 0 --> 8 (807)

6 --> 5 --> 4 (456) + 
8 --> 8 --> 6 (688) =
4 --> 4 --> 1 --> 1 (1144)

3 --> 3 --> 2 (233) +
1 --> 8 --> 4 --> 5 (5481) = 
4 --> 1 --> 7 --> 5 (5714)
*/

var ListNode = function (val) {
    this.value = val;
    this.next = null
}

var addLinkedLists = function (list1, list2) {
    let sum = new ListNode(0); // create a dummy head to point to the first digit of the sum
    let head = sum;
    let carry = 0; // when digits sum to >= 10, store a 1 here to roll over to the next place
    while (list1 !== null || list2 !== null) {
        let list1Val = 0;
        let list2Val = 0;
        if (list1) { list1Val = list1.val } // conditions to handle cases where one number has more digits: just set other list digit value as 0
        if (list2) { list2Val = list2.val }
        let add = list1Val + list2Val;
        let digit;
        if (add < 10) {
            if (!carry) { // if digit sum is less than 10 and no carry value, just make a new node with the digit sum value
                digit = new ListNode(add);
            } else if (carry) { // if there is a carry, we must add it to the sum
                if (add < 10) { // if digit sum is still < 10, reset carry to 0
                    digit = new ListNode(add + 1);
                    carry = 0;
                } else { // if digit sum is now 10, maintain carry of 1
                    digit = new ListNode(0)
                    carry = 1
                }
            }
        } else if (add >= 10) {
            if (!carry) { // if digit sum is >= 10 and there is no carry value, we set carry to 1 and create a node with digit sum - 10
                digit = new ListNode(add - 10);
                carry = 1;
            } else if (carry) { // if digit sum is >= 10 and there is a carry, we maintain the carry to the next digit with current node digit sum - 9
                digit = new ListNode(add - 9)
                carry = 1;
            }
        }
        head.next = digit; // keep updating sum linked list head to the new digit
        head = digit;
        if (list1) { list1 = list1.next };
        if (list2) { list2 = list2.next };
    }

    if (carry) { // if there is an extra 1 from carry, make sure to add another node
        head.next = new ListNode(carry)
    }
    return sum.next;
}
// time complexity: O(1) for add/remove, O(n) for contains

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    makeNode(value) {
        let node = {};
        node.value = value;
        node.next = null;
        return node;
    }

    addToTail(value) {
        let newTail = this.makeNode(value);
        if (!this.head) { this.head = newTail } // if empty list
        else if (!this.tail) { this.head.next = newTail } // if there is a head but no tail
        else { this.tail.next = newTail }; // if there is already a tail
        this.tail = newTail; // set list tail to be newTail
    }

    removeHead() {
        if (!this.head) { return null } // if empty list
        let head = this.head;
        if (this.head === this.tail) { this.head = this.tail = null } // if only one node
        else { this.head = head.next } // if more than one node
        return head;
    }

    contains(value) {
        if (!this.head) { return false }
        let pointer = this.head
        while (pointer !== this.tail) { // move pointer until we reach tail
            if (pointer.value === value) { return true }
            pointer = this.head.next;
        }
        return pointer.value === value // pointer is now at tail, so either tail is value or value doesn't exist
    }

}
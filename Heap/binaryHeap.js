// Implement a binary min heap, in which all root nodes are of lesser value than their children.
// A root node must have two children before the next oldest node can have any children.

// time compleixty for insert and remove is worst-case O(log(n)):
// best case O(1) since the insertion and removal themselves are constant time operations
// however we could have to traverse the entire heap in order to correctly place the added/swapped nodes where they belong



class BinaryHeap {
    constructor() {
        this.storage = [];
    }

    compare(firstIndex, secondIndex) {
        return this.storage[firstIndex] < this.storage[secondIndex]
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    getChildrenIndexes(parentIndex) {
        return [parentIndex * 2 + 1, parentIndex * 2 + 2]
    }

    getLesserChildIndex(firstChild, secondChild, heap) {
        return heap[firstChild] < heap[secondChild] ? firstChild : secondChild
    }

    swapNodes(parentIndex, childIndex, heap) {
        var childValue = heap[childIndex]
        var parentValue = heap[parentIndex]
        heap[childIndex] = parentValue
        heap[parentIndex] = childValue
    }

    getRoot() {
        return this.storage[0]
    }

    insert(value) {
        this.storage.push(value); // add the new value to end of storage array and calculate its parent's index
        var childIndex = this.storage.length - 1
        var parentIndex = this.getParentIndex(childIndex)
        while (childIndex > 0 && this.compare(childIndex, parentIndex)) { // childIndex above 0 means the child has a parent, and the compare function checks if the child's value is less than its parent
            this.swapNodes(parentIndex, childIndex, this.storage) // while these conditions are true, swap child with its parent and calculate the new parent index for child's updated position
            childIndex = parentIndex;
            parentIndex = this.getParentIndex(childIndex)
        }
    }

    removeRoot() {
        var lastIndex = this.storage.length - 1;
        this.swapNodes(0, lastIndex, this.storage); // swap the root node with last node
        var root = this.storage.pop(); // remove last node and return it once we're finished placing the new root in its correct position
        var parentIndex = 0;
        var childrenIndexes = this.getChildrenIndexes(parentIndex);
        var lesserChildIndex = this.getLesserChildIndex(childrenIndexes[0], childrenIndexes[1], this.storage)
        while (lesserChildIndex && this.compare(lesserChildIndex, parentIndex)) { // while the current parent has children and is greater than its smaller child, swap the two
            this.swapNodes(parentIndex, lesserChildIndex, this.storage);
            parentIndex = lesserChildIndex;
            childrenIndexes = this.getChildrenIndexes(parentIndex)
            lesserChildIndex = this.getLesserChildIndex(childrenIndexes[0], childrenIndexes[1], this.storage)
        }
        return root;
    }

}
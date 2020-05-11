// Implement a binary min heap, in which all root nodes are of lesser value than their children.
// A root node must have two children before the next oldest node can have any children.

// time compleixty for insert and remove is worst-case O(log(n)):
// best case O(1) since the insertion and removal themselves are constant time operations
// however we could have to traverse the entire heap in order to correctly place the added/swapped nodes where they belong

var getParentIndex = function(childIndex) {
    return Math.floor((childIndex - 1) / 2)
}

var getChildrenIndexes = function(parentIndex) {
    return [parentIndex * 2 + 1, parentIndex * 2 + 2]
}

var getLesserChildIndex = function(firstChild, secondChild, heap) {
    return heap[firstChild] < heap[secondChild] ? firstChild : secondChild
}

var swapNodes = function(parentIndex, childIndex, heap) {
    var childValue = heap[childIndex]
    var parentValue = heap[parentIndex]
    heap[childIndex] = parentValue
    heap[parentValue] = childValue
}

var binaryMinHeap = function() { // values stored in an array, allowing the above parent/children functions 
    this._storage = [];
    this._compare = function(i, j) {return this._storage[i] < this._storage[j]} // simple comparison for node values
}

binaryMinHeap.prototype.getRoot = function() {
    return this._storage[0]
}

binaryMinHeap.prototype.insert = function(value) {
    this._storage.push(value); // add the new value to end of storage array and calculate its parent's index
    var childIndex = this._storage.length - 1
    var parentIndex = getParentIndex(childIndex)
    while (childIndex > 0 && this._compare(childIndex, parentIndex)) { // childIndex above 0 means the child has a parent, and the compare function checks if the child's value is less than its parent
        swapNodes(parentIndex, childIndex, this._storage) // while these conditions are true, swap child with its parent and calculate the new parent index for child's updated position
        childIndex = parentIndex;
        parentIndex = getParentIndex(childIndex)
    }
}

binaryMinHeap.prototype.removeRoot = function() {
    var lastIndex = this._storage.length - 1;
    swapNodes(0, lastIndex, this._storage); // swap the root node with last node
    var root = this._storage.pop(); // remove last node and return it once we're finished placing the new root in its correct position
    var parentIndex = 0;
    var childrenIndexes = getChildrenIndexes(parentIndex);
    var lesserChildIndex = getLesserChildIndex (childrenIndexes[0], childrenIndexes[1], this._storage)
    while (lesserChildIndex && this._compare(lesserChildIndex, parentIndex)) { // while the current parent has children and is greater than its smaller child, swap the two
        swapNodes(parentIndex, lesserChildIndex, this._storage);
        parentIndex = lesserChildIndex;
        childrenIndexes = getChildrenIndexes(parentIndex)
        lesserChildIndex = getLesserChildIndex(childrenIndexes[0], childrenIndexes[1], this._storage)
    }
    return root;
}

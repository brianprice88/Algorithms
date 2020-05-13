// time complexity: O(log(n)) for insert/contains in a best case scenario

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }

    insert(value) {
        let node = new BinarySearchTree(value)
        if (node.value < this.value) { // if new value is less than root node:
            if (this.left === null) { // if there is no left branch child, place value there
                this.left = node;
            } else { // otherwise repeat using left child as new root
                this.left.insert(node)
            }
        }
        else if (node.value > this.value) { // if new value is greater than root node:
            if (this.right === null) { // if there is no right branch child, place value there
                this.right = node
            } else { // otherwise repeat using right child as new root
                this.right.insert(node)
            }
        }
    }

    contains(value) {
        if (this.value === value) { return true }
        if (this.left) { // if left child exists, check whether it/its children contain value
            let contains = this.left.contains(value)
            if (contains) { return true }
        }
        if (this.right) { // if right child exists, check whether it/its children contain value
            let contains = this.right.contains(value)
            if (contains) { return true }
        }
        return false;
    }
}
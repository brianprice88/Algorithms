// time complexity: O(1) for adding a child, O(n) for contains

class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        let child = new Tree(value)
        this.children.push(child)
    }

    contains(value) {
        if (this.value === value) { return true }
        for (var i = 0; i < this.children.length; i++) { // check if the node's children contain the value
            if (this.children[i].contains(value)) {
                return true
            }
        }
        return false
    }
}
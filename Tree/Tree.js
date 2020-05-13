// time complexity: O(1) for adding a child, O(n) for others that require looking at other nodes (n being the number of nodes)

class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) { // add a child node to the root node's children
        let child = new Tree(value);
        this.children.push(child.value)
    }

    removeChild(child) { // given a child, remove that child node if it exists
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i] = child) {
                this.children.splice(i, 1);
            }
        }
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

    countLeaves() { // count the number of nodes that have no children
        var count = 0;
        var checkChildren = function (node) {
            if (node.children.length === 0) {
                count++;
            }
            else {
                for (var i = 0; i < node.children.length; i++) {
                    checkChildren(node.children[i])
                }
            }
        }
        checkChildren(this);
        return count;
    }

    getAncestorPath(node) { // get the path between the root node and a given node by checking all paths from the root node until we find the target
        let ancestors;
        var checkAncestors = function (current, path) {
            if (current === node) { ancestors = path; return;}
            else {
                for (var i = 0; i < current.children.length; i++) {
                    let updatedPath = path.slice();
                    updatedPath.push(current.children[i])
                    checkAncestors(current.children[i], updatedPath)
                }
            }
        }
        checkAncestors(this, [this])
        return ancestors || null;
    }

    getClosestCommonAncestor(firstChild, secondChild) { // given two child nodes of this tree, determine their closest ancestor
        let firstAncestors = this.getAncestorPath(firstChild);
        let secondAncestors = this.getAncestorPath(secondChild);
        if (firstAncestors === null || secondAncestors === null) { return null } //if no ancestor path for either node, they can't have any in common
        for (var i = firstAncestors.length - 1; i >= 0; i--) { // nodes closer to children are at end of ancestor arrays, so find the one furthest to the end that the two have in common
            for (var j = secondAncestors.length - 1; j >= 0; j--) { // worst case it will be the root node since we already know both children have that as an ancestor
                if (firstAncestors[i] === secondAncestors[j]) {
                    return firstAncestors[i]
                }
            }
        }
    }

    isDescendant(child) { // given a child, use breadth first search to check if it is a descendant of this tree
        let queue = [];
        queue.push(this);
        while (queue.length > 0) {
            let node = queue.shift();
            if (node === child) { return true }
            for (var i = 0; i < node.children.length; i++) {
                queue.push(node.children[i])
            }
        }
        return false;
    }
}
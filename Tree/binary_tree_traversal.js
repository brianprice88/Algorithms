// Pre order Traversal: visit root then left branch then right branch

var preorderTraversal = function (root, nodes = []) {
    if (root) { nodes.push(root.val) }
    if (root && root.left) {
        preorderTraversal(root.left, nodes)
    }
    if (root && root.right) {
        preorderTraversal(root.right, nodes)
    }
    return nodes;
};

// In order Traversal: visit left branch then root then right branch
/* note that this can be used to determine if a tree is a valid Binary Search Tree
by checking the array of collected nodes to see whether each value is less than the one after it */

var inorderTraversal = function (root, nodes = []) {
    if (root && root.left) {
        inorderTraversal(root.left, nodes)
    }
    if (root) { nodes.push(root.val) }
    if (root && root.right) {
        inorderTraversal(root.right, nodes)
    }
    return nodes;
};

// Post Order Traversal: visit left branch then right branch then root

var postorderTraversal = function (root, nodes = []) {
    if (root && root.left) {
        postorderTraversal(root.left, nodes)
    }
    if (root && root.right) {
        postorderTraversal(root.right, nodes)
    }
    if (root) { nodes.push(root.val) }
    return nodes;
};

// time complexity for all is O(n) where n is the number of nodes, since we must visit each one

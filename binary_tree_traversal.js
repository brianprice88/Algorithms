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
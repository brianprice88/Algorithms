// this is based on an undirected graph in which an edge can be traversed in either direction between its two nodes
// a directed graph would only allow traversal in one direction

class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(node) {
        this.nodes[node] = {}
    }

    contains(node) {
        return this.nodes[node] === undefined ? false : true
    }

    removeNode(node) { // this requires removing all other nodes' edges with this node
        for (var key in this.nodes) {
            let edges = key;
            if (edges[node] !== undefined) {
                delete edges[node]
            }
        }
        delete this.nodes[node] // then we can delete the node itself at the end
    }

    hasEdge(firstNode, secondNode) { // we must check the edge exists for each node (assuming the node itself exists)
        let first = this.nodes[firstNode]
        if (!first) { return false }
        let second = this.nodes[secondNode]
        if (!second) { return false }
        if (first[secondNode] === undefined) { return false }
        if (second[firstNode] === undefined) { return false }
        return true
    }

    addEdge(firstNode, secondNode, weight = 0) { // assign the edge to both nodes
        let first = this.nodes[firstNode]
        let second = this.nodes[secondNode]
        first[secondNode] = weight;
        second[firstNode] = weight;
    }

    removeEdge(firstNode, secondNode) { // delete the edge from both nodes' list of edges
        let first = this.nodes[firstNode]
        let second = this.nodes[secondNode]
        delete first[secondNode]
        delete second[firstNode]
    }
}
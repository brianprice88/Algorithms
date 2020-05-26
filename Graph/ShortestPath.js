/* Dijkstra's Algorithm finds the shortest path between two nodes in a weighted graph, given the nodes and their edges with each edge's respective weight
example graph (undirected, though the algorithm can work with directed too):
{
A: {
B: 5,
D: 9,
E: 2
},

B: {
A: 5,
C: 2
},

C: {
B: 2,
D: 3
},

D: {
A: 9,
C: 3,
F: 2
},

E: {
A: 2,
F: 3
},

F: {
D: 2,
E: 3
}
}

Dikjstra's Algorithm would determine the shortest path from A to D (in this case A-E-F-D at total weight 7)

It does this by first finding the node with minimum weight from start node (in the example above we'd start with A, since it's the 'closest' to itself)
Next, explore that node's neighbors and update their distances from the start node (e.g. B/D/E).
Then repeat the previous steps -- next we'd select E as the minimum weight node from A, and explore its unexplored neighbor F, whose distance from A is distance from A-E-F.
Keep repeating these steps until we've explored each node's unexplored neighbors.
At the same time, we are keeping track also of the shortest distance of the node from A.
And also keeping track of the actual path (nodes) representing the shortest distance from A.

Best time complexity is O(E log(V)), where E is the number of edges and V the number of vertices.
Though that is using a binaryHeap implementation for extracting the minimum current Distance.

*/

var extractMin = function (nodes) { // helper function to find the node with minimum value
    let min;
    for (var key in nodes) {
        if (!min) { min = key; continue }
        if (nodes[key] < nodes[min]) {
            min = key;
        }
    }
    return min;
}

var determinePath = function (start, end, parents) { // given a list of each node's parent that results in the shortest path from start to that node
    let path = [end]
    while (parents[end] !== start) { // build a list of the parent node from the end until we reach the start
        path.push(parents[end])
        end = parents[end]
    }
    path.push(start)
    return path.reverse(); // and return the list from start to end
}

var ShortestPath = function (graph, startNode, endNode) {

    let distances = {}; // data structure to dynamically keep track of the least distance to reach each node
    let totalDistance = {}; // data structure to store the shortest total distance from startNode to each node
    let parent = {}; // data structure to store the parent node from a current node (used to determine shortest path at end)

    for (var key in graph) { // for each graph node, initialize its lowest distance from startNode as Infinity
        distances[key] = Infinity;
    }

    distances[startNode] = 0; // because the lowest weight to reach the startNode from itself is 0
    totalDistance[startNode] = 0 // because we know the lowest path distance from startNode to itself is 0
    parent[startNode] = null // because there is no path between startNode and itself

    while (Object.keys(distances).length > 0) { // while there is at least one node left to explore in the distances object
        let minNode = extractMin(distances); // determine the node in distances that currently is the shorest distance from the start
        totalDistance[minNode] = distances[minNode] // add that node's value to the totalDistance list
        delete distances[minNode] // remove this node from distances, prior to exploring its neighbors on the graph

        for (var key in graph[minNode]) { // explore minNode's neighbors
            if (!distances[key]) { // if a neighbor isn't still in distances, it means we've already explored it and can continue
                continue;
            }
            let currentBestPath = distances[key] // the current minimum distance from the source to this neighbor
            let pathfromSourceToMinNode = totalDistance[minNode] // the best distance from the source to minNode
            let thisEdge = graph[minNode][key] // the distance between minNode and this neighbor
            if (pathfromSourceToMinNode + thisEdge < currentBestPath) { // if we've found a shorter path to this neighbor than the current minimum distance:
                distances[key] = pathfromSourceToMinNode + thisEdge // update this neighbor's the current best distance accordingly
                parent[key] = (minNode) // and set this neighbor's parent node (for shortest path from source) to minNode
            }
        }
    }

    let bestPath = determinePath(startNode, endNode, parent) // get the actual path of nodes representing the shortest distance from start to end
    return `the shortest distance from ${startNode} to ${endNode} is ${totalDistance[endNode]} with path ${bestPath}`
}
// testing the above example graph with this algorithm yields the expected result:
// "the shortest distance from A to D is 7 with path A,E,F,D"

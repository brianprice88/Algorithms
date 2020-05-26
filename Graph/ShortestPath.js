/* Dijkstra's Algorithm finds the shortest path between two nodes in a weighted graph, given the nodes and their edges with each edge's respective weight
example graph:
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
*/

var ShortestPath = function(graph, startNode, endNode) {

}
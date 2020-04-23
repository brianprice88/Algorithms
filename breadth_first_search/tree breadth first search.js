// BFSelect accepts a filter function, calls that function on each of the nodes
//  in Breadth First order, and returns a flat array of node values of the tree
//  for which the filter returns true.


var Tree = function(value) {
  this.value = value;
  this.children = [];
};

var Queue = function () {
  this.storage = [];
  this.length = 0;
}

Queue.prototype.enqueue = function (value) {this.storage.push(value); this.length ++}
Queue.prototype.dequeue = function () {this.length --; return this.storage.shift()};

Tree.prototype.BFSelect = function(filter) {
var queue = new Queue();
var results = [];
var depth = 0;
queue.enqueue([this, depth]);
while (queue.length > 0) {
  var next = queue.dequeue();
  if (filter(next[0].value, next[1])) {results.push(next[0].value)}
  if (next[0].children.length > 0) {
    for (var i = 0; i < next[0].children.length; i++) {
      queue.enqueue([next[0].children[i], next[1] + 1])
    }
  }
}
return results

};


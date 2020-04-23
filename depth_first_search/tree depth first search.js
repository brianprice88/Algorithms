Tree.prototype.DFSelect = function(filter) {
	var results = [];
	var check = function(node, depth) {
	  if (filter(node.value, depth)) {results.push(node.value)}
	  if (node.children.length > 0) {
	    for (var i = 0; i < node.children.length; i++) {
	      check(node.children[i], depth + 1)
	    }
	  }
	}
	check(this, 0)
	return results
}	
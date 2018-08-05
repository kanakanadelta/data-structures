// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //make a new node, assigning the node name passed
  this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //check if stored node has value passed;
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //remove the node given the passed vale
  delete this.storage[node];

  //for each node with value of passed node...
  for (var key in this.storage) {
    if (this.storage[key][node]) {
      //delete the key/values associated with the node;
      delete this.storage[key][node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if node obj has edge (connection from one obj to this)
  return this.storage[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //identify edge set from one node to the other
  this.storage[fromNode][toNode] = 'node ' + fromNode + ' is connected with is node ' + toNode;
  //set value to vice-versa
  this.storage[toNode][fromNode] = 'node ' + toNode + ' is connected with is node ' + fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //set a temp holder
  var nodes = this.storage;

  //for each node in the graph storage...
  for (var key in nodes) {
    // callback for each node
    cb (key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 */

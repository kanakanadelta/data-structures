var BinarySearchTree = function(value) {
  this.newTree = {};
  this.value = value;

  this.children = [];

  _.extend(newTree, binaryTreeMethods);

  return newTree;
};

var binaryTreeMethods = {}

binaryTreeMethods.insert = function(value){
  //make a child node that accepts a value
  var childNode = BinarySearchTree(value);

  //if there is no value or value is lower than current value
    //assign value as the left property of the node

  //else if the value is a higher value than the left property
    //assign value as the right property
};

binaryTreeMethods.contains = function (target, child){
  //set storage var of child to the root children, and a fall back to the root

  //initialie result as false, until value is found

  //establish a main case

  //iterate over the nodes of the BST
    //using recursion, we will traverse each of the children and their children to find target
};

//accepts a callback
binaryTreeMethods.depthFirstLog = function(cb){
  // recursively execute the callback to every value in the BST
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

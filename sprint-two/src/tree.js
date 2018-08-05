var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //make new node with given value passed in
  var childNode = Tree(value);
  //push in node object to a node's children array
  this.children.push(childNode);
};

treeMethods.contains = function(target, child) {

  //set storage variable of child to the root children
  var child = child || this;

  //initialize result to return as false;
  var result = false;

  //Main Case
  if (child.value === target) {
    result = true;
    return result;
  }

  for (var i = 0; i < child.children.length; i++) {
    //if the interpreter runs to a function, it will evaluate the boolean
    //if true, return the result
    if (this.contains(target, child.children[i])) {
      return this.contains(target, child.children[i]);
    }
  }

  //return the result of recursion
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?

 treeMethods.contains and addchild both use linear time.
 */

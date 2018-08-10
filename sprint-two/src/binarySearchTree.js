var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryTreeMethods)
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

var binaryTreeMethods = {}

binaryTreeMethods.insert = function(value){
  // insert method:
  // if the passed in value is lower than the root/parent's value
  //and if there is no left branch yet...
  if (value < this.value && !this.left) {
    // make a new node at this parent's branch
    this.left = new BinarySearchTree(value);
  }
  // if the value is less than the root/parent node's value, and left branch is present
  // recursively call method onto its left branch node
  if (value < this.value && this.left) {
    this.left.insert(value);
  }
  // if the value is more than the root/parent's value,
  // and if there is no right branch
  if (value > this.value && !this.right) {
    //make a new node at this parent's branch
    this.right = new BinarySearchTree(value);
  }
  // if the value is more than the root/parent node's value, and right branch is present
  // recursively call method onto its right branch node
  if (value > this.value && this.right) {
    this.right.insert(value);
  }

};

binaryTreeMethods.contains = function (target, child){
  // check if the target value matches the node's value
  if (this.value === target){
    return true;
  }
  // recursively call method for the branches
  // is left branch truthy? invoke contains func. and so on, and repeat, and if no target value...
  // is right branch truthy? invoke contains func. and so on
  return !!(this.left && this.left.contains(target)) || !!(this.right && this.right.contains(target));
  //end of contains method
};

//accepts a callback
binaryTreeMethods.depthFirstLog = function(cb){
  // recursively execute the callback to every value in the BST

  //perform method on root node (and after recursion, current node it's on)
  cb (this.value);
  // if left branch present
  if (!!this.left) {
    // recursively call that method onto that node
    this.left.depthFirstLog(cb)
  }
  // if right node is present
  if (!!this.right) {
    // perform callback on that node's value;
    this.right.depthFirstLog(cb)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Based on the binary nature of this tree, O(log(n));
 */

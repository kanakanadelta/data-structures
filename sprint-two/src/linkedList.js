var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //make a node object and pass the given value
    var node = new Node(value);

    //point tail to that object
    list.tail = node;

    //if there are no tail and head, point it to the single new node
    if (list.head === null) {
      list.head = node;
    }

    //assign property of next to be tail to reference later
    list.head.next = list.tail;
  };

  //Remove Head
  list.removeHead = function() {
    //store info of the head tobe removed:
    var removed = list.head.value;

    // point to next node
    list.head = list.head.next;

    return removed;
  };

  list.contains = function(target) {
    //assign node to reference
    var node = list.head;
    //perform a linear time look up to find target value
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    //if none match
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  -Add tail will be a constant time lookup since we are only adding it to the end of the list.
  -Removing a head will also be constant time, since we're only going to see where head points to.
  -Contains will be a linear time look up, because we have to start from the beginning of our list and go from one node to the other, which are stored at different places, and the next value references the next node we have to go to.
  -
 */

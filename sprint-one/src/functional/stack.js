var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //get the incremented number and assign the value passed into it.
    storage[someInstance.size() +1] = value;
    //end of push method;
  };

  someInstance.pop = function() {
    //store the key/value pair to be popped
    var popped = storage[someInstance.size()];
    //delete the key/value pair
    delete storage[someInstance.size()];
    //since the referenced property is gone, return the stored copy
    return popped;
  };

  someInstance.size = function() {
    //retrieve the size using method Object.keys(obj)
    return Object.keys(storage).length;
  };

  return someInstance;
};

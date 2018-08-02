var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size() +1] = value;
  };

  someInstance.dequeue = function() {
    // make a storage/copy of item to dequeue
    var dequeued = storage[1];

    // re-assign values in numerical order starting with 1
    for (var i = 1; i < someInstance.size(); i++) {
      storage[i] = storage[i+1];
    }

    //delete the undefined last value
    delete storage[someInstance.size()];

    //return the stored copy of the dequeued value
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

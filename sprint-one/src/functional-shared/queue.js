var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.storage = {};

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.size() +1] = value;
  },

  dequeue: function(value) {
    var dequeued = this.storage[1];

    for (var i = 1; i< this.size(); i++) {
      this.storage[i] = this.storage[i+1];
    }

    delete this.storage[this.size()];
    return dequeued;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.storage = {};

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size() +1] = value;
  },

  pop: function() {
    var popped = this.storage[this.size()];
    delete this.storage[this.size()];
    return popped;
  },
  //
  size: function() {
    return Object.keys(this.storage).length;
  }
};

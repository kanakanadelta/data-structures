

var HashTable = function() {
  this._limit = 8;  //the number of buckets
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); //<--hash function

  // retrieve a bucket;
  var bucket = this._storage.get(index);
  // if bucket doesn't exist
  if (!bucket){
    //create bucket
    bucket = [];
    this._storage.set(index, bucket);
  }

  var keyFound = false;

  //iterate over bucket
  for (var i = 0; i < bucket.length; i++) {
    //make array (tuple) that will contain the key and value pairs
    var tuple = bucket[i];
    //check if key already exists in the ordinal position of tuple
    if (tuple[0] === k) {
      // if exists, update value of key with passed value
      tuple[1] = v;
      keyFound = true;
      //done with searching the key/value pairs, so break it out
      break;
    }
  }
  //if no key was found
  if (!keyFound){
  //insert new tuple
    bucket.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // retrieve a bucket;
  var bucket = this._storage.get(index);

  //iterate over bucket to find key
  for (var i = 0; i < bucket.length; i++) {
    //make array (tuple) that will contain the key and value pairs
    var tuple = bucket[i];
    //check if key already exists in the ordinal position of tuple
    if (tuple[0] === k) {
      // if exists...
      return tuple[1];
    }
  }
  //if no such value was found.. will return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  //iterate over the bucket
  for(var i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    //if we find a tuple,
    if (tuple[0] === k){
      //remove tuple from bucket using splice
      bucket.splice(i, 1);
      return tuple[1];
    }
  }

  //no matching key... return undefined
};



/*
 * Complexity: What is the time complexity of the above functions?
 Constant Time Operation instead of Linear Time.
 */

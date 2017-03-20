// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //var strings = [];
  if (obj === null) {
    return 'null';
  } else if (obj === undefined || typeof obj === 'function') {
    return;
  } else if (typeof obj === 'string') {
    return "\"" + obj + "\"";
  } else if (Array.isArray(obj)) {
    var arrayContents = obj.map(function(element) {
      return stringifyJSON(element);
    });
    return '[' + arrayContents.join(',') + ']';  
  } else if (obj.constructor === Object) {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      var objectContents = [];
      var keys = Object.keys(obj);
      for(var i = 0; i < keys.length; i++) {
        if (obj[keys[i]] !== undefined && typeof obj[keys[i]] !== 'function') {
          objectContents.push(stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]));
        }
      }
      return '{' + objectContents.join(',') + '}';
    } 
  } else {
    return obj.toString();
  }
};

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
      var objectContents = Object.keys(obj).map(function(key) {
        if (obj[key] !== undefined && typeof obj[key] !== 'function') {
          return stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        }
      });
      return '{' + objectContents.join(',') + '}';
    } 
  } else {
    return obj.toString();
  }
};

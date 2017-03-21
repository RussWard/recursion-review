// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var parseValue = function(json) {
    var result;
    if(json === 'true') {
      result = true;
    }
    if(json === 'false') {
      result = false;
    }
    if(json === 'null') {
      result = null;
    }
    if(parseInt(json) !== NaN) {
      result = parseInt(json);
    }
    if(json[0] === '[') {
      result = parseArray(json);
    }
    if(json[0] === '{') {
      result = parseObject(json);
    } else {
      result = json.slice(1, -1)
    }
    return result;
  }
  var parseArray = function(json) {
    var result = [];
    if(json !== '[]') {
      json.slice(1, json.lastIndexOf(']')).split(',').forEach(function(element) {
        result.push(parseValue(element));
      });
    }
    return result;
  }
  var parseObject = function(json) {
    var result = {};
    if(json !== '{}') {
      
    }
    return result;
  }
};

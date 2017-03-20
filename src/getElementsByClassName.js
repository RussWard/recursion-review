// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var checkElement = function (element) {
    if(_.contains(element.classList, className)) {
      results.push(element);
    }
    _.each(element.childNodes, function (node) { 
      checkElement(node);
    });
  };
  checkElement(document.body); 
  return results;
};

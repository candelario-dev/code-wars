/*Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?*/

var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
let name2 = 'Ben';
var greet_ben = function() {
  return "Hello, " + name2 + '!';
};

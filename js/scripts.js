var str = prompt("Enter sentence to be ciphered");
// Other way to gather the last character in the sentence.
//var newstrFL = function(str){
  //var first = str.charAt(0).toUpperCase();
  //var last = str.slice(-1).toUpperCase();
  //return first + last;
//};

var newstrLF = function(str){
  var first = str.charAt(0).toUpperCase();
  var last = str.charAt(str.length-1).toUpperCase();
  return last + first;
};

var count = function(str){
  var length = (str.length)/2;
  var letter = str.charAt(length - 1);
  return letter;
};

var newstrTwo = count(str) + str + newstrLF(str);

newstrTwo = newstrTwo.split("");
newstrTwo = newstrTwo.reverse();
newstrTwo = newstrTwo.join("");
alert(newstrTwo);

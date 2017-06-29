//Minimum
var min = function(a, b) {
  if (a < b) {
    return a;
  }

  else {
  	return b;
  }
    
}
console.log(Math.min(0, 10));
console.log(Math.min(0, -10));

//Recursion
var isEven = function (n) {
  if (n == 0) {
  	return true;
  }
  else if (n == 1) {
  	return false;
  }
  else if (n < 0) {
   return isEven(-n);
  }
  else {
   return isEven(n - 2);
  }
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//Bean Counting
var countChar = function (string, ch) {
  var count = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      count += 1;
  return count;
}

var countBs = function (string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


var addx = function(x){ return function(y){return x+y;}} 
var add2 = addx(2);
var a = [1,2,3,5,7,9];
var b = (a.map(x=> add2(x))).map(x=>x+3);
console.log(b)
console.log(b+b)
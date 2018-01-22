var arith = require("./Arith");


console.log(arith.eval("10 + 10.798"));
console.log(arith.eval("10 + 10 + 30 + 2 ^ 10"));
console.log(arith.eval("[10,20,30,40] ++ [100,200,300,400]"));
console.log(arith.eval("[100,200,300,400] -- [10,20,30,40]"));
console.log(arith.eval("[10,20,30,40] ** [2,2,2,2]"));
console.log(arith.eval("[10,20,30,40] // [2,2,2,2]"));
console.log(arith.eval("[1,2,3,4] ^^ [3,3,3,3]"));
console.log(arith.eval("[1,3,-5] . [4,-2,-1]"));
console.log(arith.eval("sin(90)"));
console.log(arith.eval("cos(90)"));
console.log(arith.eval("tan(90)"));
console.log(arith.eval("sec(90)"));
console.log(arith.eval("cosec(90)"));
console.log(arith.eval("cot(90)"));
console.log(arith.eval("e ^ 10"));
console.log(arith.eval("2 * pi * 5"));
console.log(arith.eval("_6.74"));//Floor
console.log(arith.eval("~8.14 * 4"));//Ceil
console.log(arith.eval("-10"));
console.log(arith.eval("_/4"));
console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]>"));
console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]|[3,3,3,3]> +++ <[3,3,3,3]|[3,3,3,3]|[1,1,1,1]>"));
console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]|[3,3,3,3]> --- <[3,3,3,3]|[3,3,3,3]|[1,1,1,1]>"));

// console.log(arith.eval("(10 * 10) + 40"))

// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> +++ <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> --- <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> *** <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> /// <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> * 5"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> . <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("#<[1,1,1,1]|[1,1,1,1]>"));
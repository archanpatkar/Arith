var arith = require("./Arith");


console.log(arith.eval("10 + 10.798"));
console.log(arith.eval("10 + 10 + 30 + 2 ^ 10"));
console.log(arith.eval("[10,20,30,40] ++ [100,200,300,400]"));
console.log(arith.eval("[100,200,300,400] -- [10,20,30,40]"));
console.log(arith.eval("[10,20,30,40] ** [2,2,2,2]"));
console.log(arith.eval("[10,20,30,40] // [2,2,2,2]"));
console.log(arith.eval("[1,2,3,4] ^^ [3,3,3,3]"));
// console.log(arith.eval("[1,2,3,4] . [3,3,3,3]"));
// console.log(arith.eval("[1,2,3,4] x [3,3,3,3]"));

// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> +++ <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> --- <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> *** <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> /// <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> . 5"));
// console.log(arith.eval("<[1,1,1,1]|[1,1,1,1]> x <[3,3,3,3]|[3,3,3,3]>"));
// console.log(arith.eval("#<[1,1,1,1]|[1,1,1,1]>"));
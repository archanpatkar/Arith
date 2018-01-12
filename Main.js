var ohm = require('ohm-js');
var arith = require("./Grammer");
var parser = ohm.grammar(arith);

console.log("Grammer -> " + arith);

var result = parser.match("10 + 10 * 100");

console.log("result -> " + result.succeeded());
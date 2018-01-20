var ohm = require('ohm-js');
var arith = require("./Grammer");
var actions = require("./Actions")
var parser = ohm.grammar(arith);
var semantics = parser.createSemantics();
semantics.addOperation("eval",actions)

function eval(code)
{
    var ast = parser.match(code);
    return semantics(ast).eval();
}

module.exports.eval = eval;
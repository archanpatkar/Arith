var actions = {
  Exp: (e) => e.eval(),
  AddExp: (e) => e.eval(),
  MulExp: (e) => e.eval(),
  AddExp_plus: (n1,_,n2) => n1.eval() + n2.eval(),
  AddExp_minus: (n1,_,n2) => n1.eval() - n2.eval(),
  MulExp_times: (n1,_,n2) => n1.eval() * n2.eval(),
  MulExp_div: (n1,_,n2) => n1.eval() / n2.eval(),
  MulExp_power: (n1,_,n2) => n1.eval() ** n2.eval(),
  number: (digits) => digits.eval(),
  whole: (digits) => parseInt(digits.sourceString),
  decimal: (beforeDot,_,afterDot) => parseFloat(Number(beforeDot.sourceString + "." + afterDot.sourceString))
}

module.exports = actions
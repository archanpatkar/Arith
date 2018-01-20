var actions = {
  Exp: (e) => e.eval(),
  AddExp: (e) => e.eval(),
  MulExp: (e) => e.eval(),
  AddExp_plus: (n1,_,n2) => n1.eval() + n2.eval(),
  AddExp_minus: (n1,_,n2) => n1.eval() - n2.eval(),
  MulExp_times: (n1,_,n2) => n1.eval() * n2.eval(),
  MulExp_div: (n1,_,n2) => n1.eval() / n2.eval(),
  MulExp_power: (n1,_,n2) => n1.eval() ** n2.eval(),
  number: (digits) => parseInt(digits.sourceString)
}

module.exports = actions
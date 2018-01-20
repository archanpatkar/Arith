var actions = {
  Exp: (e) => e.eval(),
  AddExp: (e) => e.eval(),
  MulExp: (e) => e.eval(),
  AddExp_plus: (n1,_,n2) => n1.eval() + n2.eval(),
  AddExp_minus: (n1,_,n2) => n1.eval() - n2.eval(),
  MulExp_times: (n1,_,n2) => n1.eval() * n2.eval(),
  MulExp_div: (n1,_,n2) => n1.eval() / n2.eval(),
  MulExp_power: (n1,_,n2) => n1.eval() ** n2.eval(),
  Sequence:(a) => a.asIteration().children.map(n => n.eval()), 
  Vector: (_,a,__) => a.eval(),
  VectorExp_plus: (v1,_,v2) =>{ 
    v1 = v1.eval();
    v2 = v2.eval();
    let v3 = [];
    for(let i in v1)
    {
      v3.push(v1[i] + v2[i]);
    }
    return v3;
  },
  VectorExp_minus: (v1,_,v2) =>{ 
    v1 = v1.eval();
    v2 = v2.eval();
    let v3 = [];
    for(let i in v1)
    {
      v3.push(v1[i] - v2[i]);
    }
    return v3;
  },
  VectorExp_mul: (v1,_,v2) =>{ 
    v1 = v1.eval();
    v2 = v2.eval();
    let v3 = [];
    for(let i in v1)
    {
      v3.push(v1[i] * v2[i]);
    }
    return v3;
  },
  VectorExp_div: (v1,_,v2) =>{ 
    v1 = v1.eval();
    v2 = v2.eval();
    let v3 = [];
    for(let i in v1)
    {
      v3.push(v1[i] / v2[i]);
    }
    return v3;
  },
  VectorExp_pow: (v1,_,v2) =>{ 
    v1 = v1.eval();
    v2 = v2.eval();
    let v3 = [];
    for(let i in v1)
    {
      v3.push(v1[i] ** v2[i]);
    }
    return v3;
  },
  number: (digits) => digits.eval(),
  whole: (digits) => parseInt(digits.sourceString),
  decimal: (beforeDot,_,afterDot) => parseFloat(Number(beforeDot.sourceString + "." + afterDot.sourceString))
}

module.exports = actions
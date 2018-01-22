var context = {};
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
  MultiSequence:(a) => a.asIteration().children.map(n => n.eval()), 
  Vector: (_,a,__) => a.eval(),
  VectorExp: (v) => v.eval(),
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
  VectorExp_dot: (v1,_,v2) => {
    v1 = v1.eval();
    v2 = v2.eval();
    let sum = 0;
    for(let i in v1)
    {
      sum += v1[i] * v2[i];
    }
    return sum;
  },
  Matrices: (_,m,__) => m.eval(),
  MatricesExp: (m) => m.eval(),
  MatricesExp_plus: (m1,_,m2) =>{ 
    m1 = m1.eval();
    m2 = m2.eval();
    let m3 = [];
    for(let i in m1)
    {
      let row = [];
      for(let j in m1[i])
      {
        row.push(m1[i][j] + m2[i][j]);
      }
      m3.push(row)
    }
    return m3;
  },
  MatricesExp_minus: (m1,_,m2) =>{ 
    m1 = m1.eval();
    m2 = m2.eval();
    let m3 = [];
    for(let i in m1)
    {
      let row = [];
      for(let j in m1[i])
      {
        row.push(m1[i][j] - m2[i][j]);
      }
      m3.push(row)
    }
    return m3;
  },
  MatricesExp_times: (m1,_,m2) =>{ 
    m1 = m1.eval();
    m2 = m2.eval();
    let m3 = [];
    for(let i in m1)
    {
      let row = [];
      for(let j in m1[i])
      {
        row.push(m1[i][j] * m2[i][j]);
      }
      m3.push(row)
    }
    return m3;
  },
  MatricesExp_div: (m1,_,m2) =>{ 
    m1 = m1.eval();
    m2 = m2.eval();
    let m3 = [];
    for(let i in m1)
    {
      let row = [];
      for(let j in m1[i])
      {
        row.push(m1[i][j] / m2[i][j]);
      }
      m3.push(row)
    }
    return m3;
  },
  BasicFunctions:(e) => e.eval(),
  Sin: (a,b,n,d) => Math.sin(n.eval()),
  Cosine: (a,b,n,d) => Math.cos(n.eval()),
  Tangent: (a,b,n,d) => Math.tan(n.eval()),
  Secant: (a,b,n,d) => 1/Math.cos(n.eval()),
  Cosecant:(a,b,n,d) => 1/Math.sin(n.eval()),
  Cotangent:(a,b,n,d) => 1/Math.tan(n.eval()),
  Constants: (e) => e.eval(),
  E: (e) => Math.E,
  PI: (e) => Math.PI,
  UnaryOperators: (e) => e.eval(),
  Floor: (_,e) => Math.floor(e.eval()),
  Ceil: (_,e) => Math.ceil(e.eval()),
  Squareroot: (_,e) => Math.sqrt(e.eval()),
  VariableExp: (e) => e.eval(),
  Variable: (name,_,e) => {
    context[name.sourceString] = e.eval();
    return context[name.sourceString];
  },
  VariableAccess: (e) => {
    let v = e.sourceString;
    if(context.hasOwnProperty(v))
    {
      return context[v];
    }
    return undefined;
  },
  ParameterList: (l) => l.asIteration().children.map(p => p),
  Function:(name,p1,plist,p2,eq,body) => {
    let func_name = name.sourceString;
    context[func_name].func_paras = plist.eval();
    context[func_name].func_body = body.sourceString;
    let output = `${func_name}(${func_paras}) = ${func_body}`;
    return output;
  },
  Paren: (_,e,__) => e.eval(),
  number: (digits) => digits.eval(),
  whole: (digits) => Number(digits.sourceString),
  decimal: (beforeDot,_,afterDot) => Number(beforeDot.sourceString + "." + afterDot.sourceString),
  negative: (_,n) => Number("-" + n.sourceString)
}

module.exports = actions
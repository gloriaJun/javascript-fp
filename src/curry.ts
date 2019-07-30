/**
 * @param {function|*} f
 * @return {function(*=): function(*=): *}
 */
const curry = (f: Function): Function => {
  return function inner(a: any, b: any): Function {
    return arguments.length === 2
      ? f(a, b)
      : function inner2(v: any): Function {
          return f(a, v);
        };
  };
};

const curryRight = (f: Function): Function => {
  return function inner(a: any, b: any): Function {
    return arguments.length === 2
      ? f(a, b)
      : function inner2(v: any): Function {
          return f(v, a);
        };
  };
};

export default curry;
export { curryRight };

/**
 * @param {function|*} f
 * @return {function(*=): function(*=): *}
 */
function curry(f) {
  return function inner(a, b) {
    return arguments.length === 2
      ? f(a, b)
      : function inner2(v) {
          return f(a, v);
        };
  };
}

function curryr(f) {
  return function inner(a, b) {
    return arguments.length === 2
      ? f(a, b)
      : function inner2(v) {
          return f(v, a);
        };
  };
}

export default curry;
export { curryr };

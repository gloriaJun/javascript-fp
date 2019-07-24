/**
 * @param {function|*} f
 * @return {function(*=): function(*=): *}
 */
function curry(f) {
  return function(a, b) {
    return arguments.length === 2
      ? f(a, b)
      : function(v) {
          return f(a, v);
        };
  };
}

function curryr(f) {
  return function(a, b) {
    return arguments.length === 2
      ? f(a, b)
      : function(v) {
          return f(v, a);
        };
  };
}

export default curry;
export { curryr };

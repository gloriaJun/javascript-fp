/**
 * Checks if `key` is a direct property of `object`.
 *
 * @category Object
 * @param {Array} list
 * @param {Function} predicate
 * @returns {Array} Returns list
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 *
 * has(object, 'a')
 * // => true
 */
function filter(list, predicate) {
  const arr = [];
  const len = list.length;

  for (let i = 0; i < len; i += 1) {
    if (predicate(list[i])) {
      arr.push(list[i]);
    }
  }

  return arr;
}

export default filter;

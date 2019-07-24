import isArray from 'array/isArray';

/**
 * @category Object
 * @param {Object, Array} list
 * @param {Function} predicate
 * @returns {Array} Returns list
 * @example
 */
function filter(list, predicate) {
  let result;

  if (isArray(list)) {
    result = [];
    const len = list.length;

    for (let i = 0; i < len; i += 1) {
      if (predicate(list[i])) {
        result.push(list[i]);
      }
    }
  } else {
    result = {};
    const keys = Object.keys(list);
    const len = keys.length;

    for (let i = 0; i < len; i += 1) {
      const key = keys[i];

      if (predicate(list[key])) {
        result[key] = list[key];
      }
    }
  }

  return result;
}

export default filter;

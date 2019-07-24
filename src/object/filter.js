import isArray from 'array/isArray';
import each from 'each';

/**
 * @category Object
 * @param {Object|Array} list
 * @param {Function} predicate
 * @returns {Array} Returns list
 * @example
 */
function filter(list, predicate) {
  let result;

  if (isArray(list)) {
    result = [];
    each(list, (item, i) => {
      if (predicate(item, i, list)) {
        result.push(item);
      }
    });
  } else {
    result = {};
    each(list, (item, key) => {
      if (predicate(item, key, list)) {
        result[key] = list[key];
      }
    });
  }

  return result;
}

export default filter;

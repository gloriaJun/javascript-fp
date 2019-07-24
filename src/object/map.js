import isArray from 'array/isArray';
import each from 'each';

/**
 *
 * @category Object
 * @param {Object|Array} list
 * @param {Function} predicate
 */
function map(list, predicate) {
  let result;

  if (isArray(list)) {
    result = [];
    each(list, (item, i) => result.push(predicate(item, i, list)));
  } else {
    result = {};
    each(list, (item, key) => {
      result[key] = predicate(item, key, list);
    });
  }

  return result;
}

export default map;

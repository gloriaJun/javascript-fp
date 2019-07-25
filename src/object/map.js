import { isArray } from 'array';
import each from 'each';

/**
 *
 * @category Object
 * @param {Object|Array} list
 * @param {Function} predicate
 */
function map(list, predicate) {
  const result = isArray(list) ? [] : {};

  each(list, (item, key) => {
    result[key] = predicate(item, key, list);
  });

  return result;
}

export default map;

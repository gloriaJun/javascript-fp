import { isArray } from '../array';
import each from '../each';
import { curryr } from '../curry';

/**
 * @category Object
 * @param {Object|Array} list
 * @param {Function} predicate
 * @returns {Array} Returns list
 * @example
 */
function filter(list: object | any[], predicate: Function): object | any[] {
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
        result[key] = item;
      }
    });
  }

  return result;
}

export default curryr(filter);

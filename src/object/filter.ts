import { isArray } from '../array';
import each from '../each';
import { curryRight } from '../curry';

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
    each(list, (item, i): void => {
      if (predicate(item, i, list)) {
        result.push(item);
      }
    });
  } else {
    result = {};
    each(list, (item, key): void => {
      if (predicate(item, key, list)) {
        result[key] = item;
      }
    });
  }

  return result;
}

export default curryRight(filter);

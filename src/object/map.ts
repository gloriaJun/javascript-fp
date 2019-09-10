import { isArray } from '../array';
import each from '../each';
import { curryRight } from '../curry';

/**
 *
 * @category Object
 * @param {Object|Array} list
 * @param {Function} predicate
 */
function map(list: object | any[], predicate: Function): object | any[] {
  const result = isArray(list) ? [] : {};

  each(list, (item, key): void => {
    result[key] = predicate(item, key, list);
  });

  return result;
}

export default curryRight(map);

import { isArray } from 'array';
import { isObject } from 'object';

/**
 * To check the object is include the following condition
 *  - null
 * - undefined
 * - []
 * - {}
 * - '' (empty string)
 *
 * @category Object
 * @param obj
 * @returns {boolean}
 */
export default function isEmpty(obj) {
  return (
    obj === undefined ||
    obj === null ||
    (isArray(obj) && !obj.length) ||
    (isObject(obj) && !Object.keys(obj).length)
  );
}

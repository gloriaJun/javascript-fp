/**
 * Checks if `key` is a direct property of `object`.
 *
 * @category Object
 * @param {Object} object The object to query.
 * @param {string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 *
 * has(object, 'a')
 * // => true
 */
export default (object: object, key: string): boolean => {
  return object != null && Object.prototype.hasOwnProperty.call(object, key);
};

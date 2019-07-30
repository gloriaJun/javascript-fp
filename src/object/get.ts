import hasKey from './hasKey';

/**
 * @category Object
 * @param {Object} object The object to query.
 * @param {string} key The key to check.
 */
export default (object: object, key: string): any =>
  hasKey(object, key) ? object[key] : undefined;

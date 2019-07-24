import hasKey from './hasKey';

/**
 * @category Object
 * @param {Object} object The object to query.
 * @param {string} key The key to check.
 */
function get(object, key) {
  return hasKey(object, key) ? object[key] : undefined;
}

export default get;

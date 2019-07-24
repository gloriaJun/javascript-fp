/**
 *
 * @category Object
 * @param {Object, Array} list
 * @param {Function} predicate
 */
function map(list, predicate) {
  let result;

  if (Array.isArray(list)) {
    result = [];
    const len = list.length;
    for (let i = 0; i < len; i += 1) {
      result[i] = predicate(list[i], i, list);
    }
  } else {
    result = {};
    const keys = Object.keys(list);
    const len = keys.length;
    for (let i = 0; i < len; i += 1) {
      result[i] = predicate(list[keys[i]], keys[i], list);
    }
  }

  return result;
}

export default map;

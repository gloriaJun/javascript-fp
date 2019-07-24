/**
 * @category Array
 * @param {*} obj
 * @return {boolean}
 */
function isArray(obj) {
  return !Array.isArray
    ? Object.prototype.toString.call(obj) === '[object Array]'
    : Array.isArray(obj);
}

export default isArray;

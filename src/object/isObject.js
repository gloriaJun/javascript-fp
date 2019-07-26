/**
 * @category Object
 * @param {*} obj
 * @return {boolean}
 */
export default function isObject(obj) {
  const type = typeof obj;
  return obj != null && (type === 'object' || type === 'function');
}
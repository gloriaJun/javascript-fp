/**
 * @category Array
 * @param {*} obj
 * @return {boolean}
 */
export default function isArray(obj: unknown): boolean {
  return !Array.isArray
    ? Object.prototype.toString.call(obj) === '[object Array]'
    : Array.isArray(obj);
}

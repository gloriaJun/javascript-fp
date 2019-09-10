/**
 * @category Object
 * @param {*} obj
 * @return {boolean}
 */
export default (obj: any): boolean => {
  const type = typeof obj;
  return obj != null && (type === 'object' || type === 'function');
};

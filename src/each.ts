import isArray from './array/isArray';
import { curryRight } from './curry';

/**
 * @param {Object|Array} list
 * @param {Function} iteratee
 */
const each = (list: any, iteratee: Function): any => {
  if (isArray(list)) {
    const len = list.length;

    for (let i = 0; i < len; i += 1) {
      iteratee(list[i], i);
    }
  } else {
    const keys = Object.keys(list);
    const len = keys.length;

    for (let i = 0; i < len; i += 1) {
      const key = keys[i];
      iteratee(list[key], key, i);
    }
  }
};

export default curryRight(each);

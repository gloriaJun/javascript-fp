import { isArray } from 'array';
import each from 'each';

/**
 *
 * @category Object
 * @param {Object|Array} list
 * @param {Function} iteratee
 * @param {*} accumulator
 */
function reduce(list, iteratee, accumulator = undefined) {
  let hasAccum = arguments.length >= 3;
  let initAccum = accumulator;

  if (isArray(list)) {
    each(list, (item, i) => {
      initAccum = hasAccum
        ? iteratee(initAccum, item, i, list)
        : ((hasAccum = true), item);
    });
  } else {
    if (!hasAccum) {
      initAccum = {};
    }

    each(list, (item, key) => {
      initAccum = iteratee(initAccum, item, key, list);
    });
  }

  return initAccum;
}

export default reduce;

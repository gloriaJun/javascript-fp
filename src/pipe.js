import { reduce } from 'object';

/**
 * @param {Function} args
 */
export default function pipe(...args) {
  return function inner(arg) {
    return reduce(
      args,
      function inner2(fn1, fn2) {
        return fn2(fn1);
      },
      arg,
    );
  };
}

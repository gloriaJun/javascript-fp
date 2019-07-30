import { reduce } from './object';

/**
 * @param {Function} args
 */
export default (...args: Function[]): Function => {
  return function inner(arg: Function): any {
    return reduce(
      args,
      function inner2(fn1: Function, fn2: Function): any {
        return fn2(fn1);
      },
      arg,
    );
  };
};

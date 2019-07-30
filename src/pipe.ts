import { reduce } from './object';

/**
 * @param {Function} args
 */
export default (...args: any): Function => {
  return function inner(arg: any): Function {
    return reduce(
      args,
      function inner2(fn1: Function, fn2: Function): Function {
        return fn2(fn1);
      },
      arg,
    );
  };
};

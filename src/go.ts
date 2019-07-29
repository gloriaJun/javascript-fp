import pipe from './pipe';

export default (arg: any, ...fns: Function[]): Function => pipe(...fns)(arg);

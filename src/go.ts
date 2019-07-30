import pipe from './pipe';

export default (arg: any, ...fns: Function[]): any => pipe(...fns)(arg);

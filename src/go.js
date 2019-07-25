import pipe from 'pipe';

export default function go(arg, ...fns) {
  return pipe(...fns)(arg);
}

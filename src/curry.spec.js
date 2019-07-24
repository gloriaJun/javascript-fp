import curry, { curryr } from 'curry';

describe('curry', () => {
  it('should be return 15 - add', () => {
    const add = curry((a, b) => a + b);
    const add10 = add(10);

    expect(add10(5)).toBe(15);
    expect(add(10)(5)).toBe(15);
    expect(add(10, 5)).toBe(15);
  });

  it('should be return 5 - sub', () => {
    const sub = curryr((a, b) => a - b);
    const sub5 = sub(5);

    expect(sub5(10)).toBe(5);
    expect(sub(5)(10)).toBe(5);
    expect(sub(10, 5)).toBe(5);
  });
});

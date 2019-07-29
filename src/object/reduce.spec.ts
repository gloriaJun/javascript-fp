import reduce from './reduce';

describe('reduce', () => {
  const add = (a, b) => a + b;

  it('should be return after 15 when given array', () => {
    const result = reduce([1, 2, 3, 4, 5], add, 10);
    expect(result).toBe(25);
  });

  it('should be return after 15 when given array and no initial value', () => {
    const result = reduce([1, 2, 3, 4, 5], add);
    expect(result).toBe(15);
  });

  it('should be return after grouping with value when given object', () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (accum, value, key) => {
        (accum[value] || (accum[value] = [])).push(key);
        return accum;
      },
      {},
    );
    expect(result).toMatchObject({ '1': ['a', 'c'], '2': ['b'] });
  });

  it('should be return after grouping with value when given object with no init value', () => {
    const result = reduce({ a: 1, b: 2, c: 1 }, (accum, value, key) => {
      (accum[value] || (accum[value] = [])).push(key);
      return accum;
    });
    expect(result).toMatchObject({ '1': ['a', 'c'], '2': ['b'] });
  });
});

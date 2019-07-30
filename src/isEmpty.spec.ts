import isEmpty from './isEmpty';

describe('isEmpty', () => {
  it('should be return false: abc', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  it('should be return true : null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should be return true : undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should be return true : empty string', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should be return true : 12abd', () => {
    expect(isEmpty('12abd')).toBe(false);
  });

  it('should be return true : void 0', () => {
    expect(isEmpty(void 0)).toBe(true);
  });

  it('should be return true: []', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should be return false: [1, 2]', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });

  it('should be return true: {}', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should be return false: { a: 1 }', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});

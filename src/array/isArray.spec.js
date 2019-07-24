import isArray from './isArray';

describe('isArray', () => {
  it('should be return true - []', () => {
    expect(isArray([])).toBe(true);
  });

  it('should be return false - {}', () => {
    expect(isArray({})).toBe(false);
  });

  it('should be return false - null', () => {
    expect(isArray(null)).toBe(false);
  });

  it('should be return false - [1,2,3]', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });
});

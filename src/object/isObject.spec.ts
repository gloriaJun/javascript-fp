import isObject from './isObject';

describe('isObject', () => {
  it('should be return true - {}', () => {
    expect(isObject({})).toBe(true);
  });

  it('should be return true - () => {}', () => {
    expect(isObject(() => {})).toBe(true);
  });

  it('should be return false - null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should be return true - [1,2,3]', () => {
    expect(isObject([1, 2, 3])).toBe(true);
  });
});

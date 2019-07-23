import isNullOrEmpty from './isNullOrEmpty';

describe('isNullOrEmpty', () => {
  it('string - should be return false: abc', () => {
    expect(isNullOrEmpty('abc')).toBe(false);
  });

  it('string - should be return true : null', () => {
    expect(isNullOrEmpty(null)).toBe(true);
  });

  it('string - should be return true : undefined', () => {
    expect(isNullOrEmpty(undefined)).toBe(true);
  });

  it('string - should be return true : empty string', () => {
    expect(isNullOrEmpty(undefined)).toBe(true);
  });
});

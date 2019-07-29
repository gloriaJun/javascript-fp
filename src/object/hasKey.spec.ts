import hasKey from './hasKey';

describe('hasKey', () => {
  it('should check for own properties', () => {
    const obj = { a: 1 };
    expect(hasKey(obj, 'a')).toBe(true);
  });

  // it('string - should be return true : null', () => {
  //   expect(isNullOrEmpty(null)).toBe(true);
  // });
  //
  // it('string - should be return true : undefined', () => {
  //   expect(isNullOrEmpty(undefined)).toBe(true);
  // });
  //
  // it('string - should be return true : empty string', () => {
  //   expect(isNullOrEmpty(undefined)).toBe(true);
  // });
});

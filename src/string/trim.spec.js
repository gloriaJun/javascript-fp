import trim from './trim';

describe('trim', () => {
  it('should be return "abc": " abc"', () => {
    expect(trim(' abc')).toBe('abc');
  });

  it('should be return "abc": "abc "', () => {
    expect(trim('abc ')).toBe('abc');
  });

  it('should be return "abc": " abc "', () => {
    expect(trim(' abc ')).toBe('abc');
  });

  it('should be return "abc": "     abc     "', () => {
    expect(trim(' abc ')).toBe('abc');
  });

  it('should be return "abc": "     a bc     "', () => {
    expect(trim('     a bc     ')).toBe('a bc');
  });
});

import pipe from 'pipe';

describe('pipe', () => {
  it('should be return 4', () => {
    const f = pipe(
      a => a + 1,
      a => a * 2,
    );

    expect(f(1)).toBe(4);
  });
});

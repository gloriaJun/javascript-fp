import go from 'go';

describe('go', () => {
  it('should be return 4', () => {
    const result = go(1, a => a + 1, a => a * 2);

    expect(result).toBe(4);
  });

  it('should be return 14', () => {
    const result = go(1, a => a + 1, a => a * 2, a => a + 10);

    expect(result).toBe(14);
  });
});

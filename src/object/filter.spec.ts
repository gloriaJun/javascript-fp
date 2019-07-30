import filter from './filter';

describe('filter', () => {
  it('should be return age over 30 - given array type', () => {
    const users = [
      { id: 1, name: 'ID', age: 36 },
      { id: 2, name: 'BJ', age: 16 },
      { id: 3, name: 'JM', age: 28 },
      { id: 4, name: 'HA', age: 33 },
      { id: 5, name: 'JE', age: 18 },
      { id: 6, name: 'AN', age: 35 },
      { id: 7, name: 'KA', age: 39 },
      { id: 8, name: 'WP', age: 31 },
    ];
    const result = filter(users, item => item.age >= 30);

    expect(result.length).toBe(5);
    expect(result).toMatchObject([
      { id: 1, name: 'ID', age: 36 },
      { id: 4, name: 'HA', age: 33 },
      { id: 6, name: 'AN', age: 35 },
      { id: 7, name: 'KA', age: 39 },
      { id: 8, name: 'WP', age: 31 },
    ]);
  });

  it('should be return age over 30 - given array type', () => {
    const users = {
      1: { id: 1, name: 'ID', age: 36 },
      2: { id: 2, name: 'BJ', age: 16 },
      3: { id: 3, name: 'JM', age: 28 },
      4: { id: 4, name: 'HA', age: 33 },
      5: { id: 5, name: 'JE', age: 18 },
      6: { id: 6, name: 'AN', age: 35 },
      7: { id: 7, name: 'KA', age: 39 },
      8: { id: 8, name: 'WP', age: 31 },
    };
    const result = filter(users, item => item.age < 20);

    expect(result).toMatchObject({
      2: { id: 2, name: 'BJ', age: 16 },
      5: { id: 5, name: 'JE', age: 18 },
    });
  });
});

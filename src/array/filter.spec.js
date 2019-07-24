import filter from './filter';

describe('filter', () => {
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

  it('should be return age over 30', () => {
    const result = filter(users, item => item.age >= 30);
    const expectedValue = [
      { id: 1, name: 'ID', age: 36 },
      { id: 4, name: 'HA', age: 33 },
      { id: 6, name: 'AN', age: 35 },
      { id: 7, name: 'KA', age: 39 },
      { id: 8, name: 'WP', age: 31 },
    ];
    expect(result.length).toBe(5);
    expect(result).toMatchObject(expectedValue);
  });
});

import go from './go';
import { filter, map, get } from './object';

describe('go', () => {
  it('should be return 4', () => {
    const result = go(1, a => a + 1, a => a * 2);

    expect(result).toBe(4);
  });

  it('should be return 14', () => {
    const result = go(1, a => a + 1, a => a * 2, a => a + 10);

    expect(result).toBe(14);
  });

  it('should be return 14', () => {
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
    const result = go(
      users,
      filter((user): boolean => user.age > 36),
      map(get('name')),
    );

    expect(result).toMatchObject(['KA']);
  });
});

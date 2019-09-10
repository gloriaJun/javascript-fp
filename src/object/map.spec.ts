import map from './map';

describe('map', () => {
  it('should be return after adding 10 each item', () => {
    const result = map([1, 2, 3, 4, 5], item => item + 10);
    expect(result).toMatchObject([11, 12, 13, 14, 15]);
  });

  it('should be return with grade property', () => {
    const result = map({ 0: { age: 11 }, 1: { age: 13 } }, item => {
      const temp = item;
      temp.grade = 'D';
      return temp;
    });

    expect(result).toMatchObject({
      0: { age: 11, grade: 'D' },
      1: { age: 13, grade: 'D' },
    });
  });
});

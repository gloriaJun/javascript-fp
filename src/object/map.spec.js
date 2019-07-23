import map from './map';

describe('map', () => {
  it('should be return after adding 10 each item', () => {
    const result = map([1, 2, 3, 4, 5], item => item + 10);
    console.log(result);
    expect(result).toMatchObject([11, 12, 13, 14, 15]);
  });
});

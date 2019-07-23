import camelCase from './camelCase';

describe('camelCase', () => {
  it('shoud be return "foo": "FOO"', () => {
    expect(camelCase('Foo')).toBe('foo');
  });

  it('shoud be return "fooBar": "Foo Bar"', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  it('shoud be return "fooBar": "---Foo-Bar---"', () => {
    expect(camelCase('---Foo-Bar---')).toBe('fooBar');
  });

  it('shoud be return "fooBar": "_Foo_Bar_"', () => {
    expect(camelCase('_Foo_Bar_')).toBe('fooBar');
  });

  it('shoud be return "fooBar": "FOO_BAR"', () => {
    expect(camelCase('FOO_BAR')).toBe('fooBar');
  });

  it('shoud be return "fooBar": "FOO   BAR_TEST"', () => {
    expect(camelCase('FOO   BAR_TEST')).toBe('fooBarTest');
  });
});

/**
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
export default str => {
  return str
    .toLowerCase()
    .replace(/[-_]/g, ' ')
    .trim()
    .replace(/\s(.)/g, $1 => $1.toUpperCase())
    .replace(/\s+/g, '');
};

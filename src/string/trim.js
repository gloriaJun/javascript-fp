export default str =>
  String.prototype.trim
    ? str.trim()
    : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

// import fs from 'fs';
// import map from './src/utils';
const map = require('./src/utils');

console.log(map([1, 2, 3, 4, 5], item => item + 10));

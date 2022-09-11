// Module - Encapsulate code (only show minimun)
// CommonJS - every file is module (by default)


const names = require('./4-names');
const sayHi = require('./5-utiles');
console.log(names)
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
require('./6-mind');
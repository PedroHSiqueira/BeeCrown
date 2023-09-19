var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14

console.log(((2 * pi) * lines[0]).toFixed(2))
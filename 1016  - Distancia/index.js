var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const distancia = +lines[0] * 2

console.log(`${distancia} minutos`)
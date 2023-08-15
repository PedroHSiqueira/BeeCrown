var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [a,b,c,d] = lines

const diferenca = a * b - c * d

console.log(`DIFERENCA = ${diferenca}`)
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.map( x => Number(x))

const PROD = numeros[0] * numeros[1]

console.log(`PROD = ${PROD}`)
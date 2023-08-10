var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const nome = lines.shift()

const numeros = lines.map( num => Number(num))

const bonus = numeros[1] * 0.15

console.log(`TOTAL = R$ ${(numeros[0] + bonus).toFixed(2)}`)


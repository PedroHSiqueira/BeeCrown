var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


const numeros = lines.map(x => Number(x))

console.log(`NUMBER = ${numeros[0]}\nSALARY = U$ ${(numeros[1] * numeros[2]).toFixed(2)}`)

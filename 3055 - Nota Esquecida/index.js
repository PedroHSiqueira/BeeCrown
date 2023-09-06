var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const notaProva = +lines[0]
const media = +lines[1]

const notaProva2 = Math.abs((media * 2) - notaProva)

console.log(notaProva2);
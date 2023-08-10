var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


const converterNumeros = lines.map( num => Number(num))

const distanciaPercorrida = converterNumeros[0] * converterNumeros[1]

const litrosNecessarios = distanciaPercorrida / 12

console.log(litrosNecessarios.toFixed(3))
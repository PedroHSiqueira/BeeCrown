var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numerosElemento1 = lines[0].split(' ').map(x => Number(x))
const numerosElemento2 = lines[1].split(' ').map(x => Number(x))

const codigo1 = numerosElemento1[0]
const codigo2 = numerosElemento1[0]

const total = numerosElemento1[1] * numerosElemento1[2] + numerosElemento2[1] * numerosElemento2[2]

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
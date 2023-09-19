var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numero1 = parseFloat(lines[0]).toFixed(1)

let numero2 = parseFloat(lines[1]).toFixed(1)

let media = (numero1 * 3.5 + numero2 * 7.5) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)

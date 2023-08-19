var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const raio = +lines[0]

const volume = (4 * 3.14159 * raio ** 3) / 3

console.log(`VOLUME = ${volume.toFixed(3)}`)
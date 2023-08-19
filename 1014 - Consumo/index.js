var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const distancia = Number(lines[0])

const gasto = Number(lines[1]).toFixed(1)

const media = distancia / gasto

console.log(`${media.toFixed(3)} km/l`)
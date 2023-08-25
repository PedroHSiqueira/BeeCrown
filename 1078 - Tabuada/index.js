var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numero = +lines[0]

for(let i = 1; i <= 10; i++){
  console.log(`${i} x ${numero} = ${(i * numero).toFixed(0)}`)
}

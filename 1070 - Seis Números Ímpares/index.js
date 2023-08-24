var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let inicio = +lines[0]

if(inicio % 2 === 0){
  inicio += 1
}

for(let i = 0; i < 11; i += 2){
  console.log(inicio + i)
}

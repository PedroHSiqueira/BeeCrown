var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const vezes = lines.shift()

for(let i = 1; i <= vezes; i++){
    console.log(`resposta ${i}: ${lines[i - 1]}`)
}

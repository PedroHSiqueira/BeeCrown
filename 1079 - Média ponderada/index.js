var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


const vezes = lines.shift()

for(let i = 0; i < vezes; i++){
    let [n1,n2,n3] = lines[i].split(" ")

    const peso1 = 2
    const peso2 = 3
    const peso3 = 5

    const media = (n1 * peso1 + n2 * peso2 + n3 * peso3) / (peso1 + peso2 + peso3)
    console.log(media.toFixed(1))
}
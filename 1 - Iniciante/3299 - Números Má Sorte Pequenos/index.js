var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numero1 = lines[0].includes("13")

if(numero1 == true){
    console.log(`${lines[0]} es de Mala Suerte`)
}else{
    console.log(`${lines[0]} NO es de Mala Suerte`)
}

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let vezes = lines.shift()

for(let i = 0; i < vezes; i++){
  let numero = lines[i]
  let leds = 0
  let tamanho = 0

  do{
    if(numero[tamanho] == "1") leds += 2
    if(numero[tamanho] == "2") leds += 5
    if(numero[tamanho] == "3") leds += 5
    if(numero[tamanho] == "4") leds += 4
    if(numero[tamanho] == "5") leds += 5
    if(numero[tamanho] == "6") leds += 6
    if(numero[tamanho] == "7") leds += 3
    if(numero[tamanho] == "8") leds += 7
    if(numero[tamanho] == "9") leds += 6
    if(numero[tamanho] == "0") leds += 6
    tamanho++
  }while(tamanho != numero.length)

  console.log(`${leds} leds`)
}
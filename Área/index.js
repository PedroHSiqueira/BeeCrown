var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [a, b, c,] = lines.shift().split(' ')

const areaTriangulo = a * c / 2

const areaCirculo = 3.14159 * c ** 2

const areaTrapezio = ((+a + +b) * c )/ 2

const areaQuadrado = b * b

const areaRetangulo = a * b

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`)
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`)
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`)
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`)
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`)

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let index = 0;

do {
  let [coordenadaX, coordenadaY] = lines[index].split(" ");
  coordenadaX = Number(coordenadaX);
  coordenadaY = Number(coordenadaY);

  if (coordenadaX === 0 || coordenadaY === 0) {
    break;
  }

  if (coordenadaX > 0 && coordenadaY > 0) {
    console.log("primeiro");
  } else if (coordenadaX < 0 && coordenadaY > 0) {
    console.log("segundo");
  } else if (coordenadaX < 0 && coordenadaY < 0) {
    console.log("terceiro");
  } else if (coordenadaX > 0 && coordenadaY < 0) {
    console.log("quarto");
  }

  index++;
} while (true);

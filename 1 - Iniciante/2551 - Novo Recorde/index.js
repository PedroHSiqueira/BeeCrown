var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let recorde = 0;

while (lines.length !== 0) {
  const number = parseInt(lines.shift());

  for (let i = 1; i <= number; i++) {
    let [a, b] = lines.shift().split(" ");
    if (i == 1) {
      console.log(i);
      recorde = b / a;
    }

    if (b / a > recorde) {
      console.log(i);
      recorde = b / a;
    }
  }

  if (lines.length == 1) {
    break;
  }

  recorde = 0;
}

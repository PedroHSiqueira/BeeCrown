var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

for (let index = 0; index < lines.length - 1; index++) {
  console.log(+lines[index] - 1);
}

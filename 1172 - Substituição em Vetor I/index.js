var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
  if (+lines[i] <= 0) {
    console.log(`X[${i}] = 1`);
  } else {
    console.log(`X[${i}] = ${+lines[i]}`);
  }
}

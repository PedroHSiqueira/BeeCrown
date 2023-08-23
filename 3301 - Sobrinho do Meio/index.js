var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [H, Z, L] = lines.shift().split(" ")

if((Z > H && Z < L) || (Z < H && Z > L) ){
    console.log("zezinho")
}else if((H > Z && H < L) || (H < Z && H > L)){
    console.log("huguinho")
}else if((L > H && L < Z) || (L < H && L > Z)){
    console.log("luisinho")
}
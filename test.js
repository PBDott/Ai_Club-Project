let input = require('fs').readFileSync('c:\\coding\\ai_front\\test.txt').toString().trim().split('\n');

const cnt = Number(input[0]);
let result = "";

for(let i = 1; i <= cnt; i++) {
    let num = input[i].split(" ");
    result += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(result);

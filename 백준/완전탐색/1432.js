/*
    https://www.acmicpc.net/problem/1436
*/

const input = require("fs")
  .readFileSync(__dirname + "/1432.txt")
  .toString()
  .trim();

let N = Number(input);
let num = 666;
let cnt = 1;
while (cnt !== N) {
  num++;
  if (String(num).includes("666")) cnt++;
}
console.log(num);

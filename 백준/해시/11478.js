/*
    https://www.acmicpc.net/problem/11478
*/

const input = require("fs")
  .readFileSync(__dirname + "/11478.txt")
  .toString()
  .trim();

let result = {};
let str = "";

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    str = input.slice(i, j + 1);
    result[str] = 0;
  }
}
console.log(result);

console.log(Object.keys(result).length);

/*
    https://www.acmicpc.net/problem/15829
*/

const index = require("fs")
  .readFileSync(__dirname + "/15829.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(index[0]);
let str = index[1];

// 아스키코드
// a : 97 ~ z : 122
let result = 0;
let r = 1;
for (let i = 0; i < N; i++) {
  result = (result + (str.charCodeAt(i) - 96) * r) % 1234567891;
  r = (r * 31) % 1234567891;
}

console.log(result);

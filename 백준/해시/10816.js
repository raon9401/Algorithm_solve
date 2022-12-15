/*
    https://www.acmicpc.net/problem/10816
*/

const input = require("fs")
  .readFileSync(__dirname + "/10816.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let M = Number(input[2]);
let insert = input[1].split(" ");
let check = input[3].split(" ");

let obj = {};
let result = "";

for (let i = 0; i < N; i++) {
  obj[insert[i]] = 0;
}
for (let i = 0; i < N; i++) {
  obj[insert[i]]++;
}
for (let i = 0; i < M; i++) {
  if (obj[check[i]] !== undefined) {
    result += obj[check[i]] + " ";
  } else {
    result += "0 ";
  }
}
console.log(result);

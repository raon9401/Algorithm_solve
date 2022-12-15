/*
    https://www.acmicpc.net/problem/2559
*/

const input = require("fs")
  .readFileSync(__dirname + "/2559.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map((el) => Number(el));
let temp = input[1].split(" ").map((el) => Number(el));
let result = [];

for (let i = 0; i <= N - M; i++) {
  let sum = 0;
  for (let j = i; j < i + M; j++) {
    sum += temp[j];
  }
  result.push(sum);
}

console.log(Math.max(...result));

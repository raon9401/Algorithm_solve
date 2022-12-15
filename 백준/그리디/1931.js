/*
    https://www.acmicpc.net/problem/1931
*/

const input = require("fs")
  .readFileSync(__dirname + "/1931.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];
for (let i = 0; i < input.length - 1; i++) {
  arr[i] = input[i + 1];
}
arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
arr.sort((a, b) => a[0] - b[0]);
arr.sort((a, b) => a[1] - b[1]);

let result = [arr[0]];
let end = arr[0][1];
for (let i = 1; i < arr.length; i++) {
  if (end <= arr[i][0]) {
    result.push(arr[i]);
    end = arr[i][1];
  }
}
console.log(result.length);

/*
    https://www.acmicpc.net/problem/14620
*/

const input = require("fs")
  .readFileSync(__dirname + "/14620.txt")
  .toString()
  .trim()
  .split("\n");

let [n, ...arr] = input;
arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
console.log(arr);
// 가장 바깥쪽 좌표에는 심지 못함.
// 하나의 씨앗마다 5개 좌표(원점,상하좌우)를 저장.
// 5개 좌표의 가격이 제일 낮은순을 구한다.

let x = 1; // max n-2
let y = 1; // max n-2

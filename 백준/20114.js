/*
    https://www.acmicpc.net/problem/20114
*/

const input = require("fs")
  .readFileSync(__dirname + "/20114.txt")
  .toString()
  .trim()
  .split("\n");

//   x = 세로, y = 가로
let [n, x, y] = input[0].split(" ");
x = Number(x);
y = Number(y);
let result = {};
let str = [];
let answer = [];

for (let i = 1; i <= x; i++) {
  let start = 0;
  let end = y;
  result[i] = [];
  for (let j = 0; j < n; j++) {
    result[i].push(input[i].slice(start, end));
    start = end;
    end += y;
  }
}
console.log(result);
for (let i = 0; i < n; i++) {
  let voidStr = "";
  for (let j = 1; j <= x; j++) {
    voidStr += result[j][i];
  }
  str.push(voidStr.split(""));
}
console.log(str);

for (let i = 0; i < str.length; i++) {
  str[i] = str[i].filter((el) => el !== "?");
}
console.log(str);

for (let i = 0; i < str.length; i++) {
  if (str[i][0] !== undefined) {
    answer.push(str[i][0]);
  } else {
    answer.push("?");
  }
}
console.log(answer.join(""));

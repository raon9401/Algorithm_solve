/*
    https://www.acmicpc.net/problem/11729

    재귀의 예제
    3개의 탑이 있음.
    [옮기기전, 옮긴후]
    console.log 너무 많이 찍어서 시간초과뜸!
 */
const input = require("fs")
  .readFileSync(__dirname + "/11729.txt")
  .toString()
  .trim()
  .split();

let N = Number(input[0]);

var answer = [];
let count = 0;
let result = "";
// from : 시작 탑
// to : 도착 탑
// other : 경유 탑
const hanoi = (num, from, to, other) => {
  if (num === 0) return;
  hanoi(num - 1, from, other, to);
  answer.push([from, to]);
  hanoi(num - 1, other, to, from);
  count++;
  return count;
};

// console.log 말고 문자열에 추가해서 하나만 출력하게 변경.
// console.log 너무 많이 찍으면 시간초과~~
result += hanoi(N, 1, 3, 2) + "\n";
for (let i of answer) {
  result += `${i[0]} ${i[1]}\n`;
}
// console.log(result);
// for (let i of answer) {
//   console.log(i);
// }

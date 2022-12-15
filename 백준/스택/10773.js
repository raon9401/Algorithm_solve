// https://www.acmicpc.net/problem/10773
const input = require("fs")
  .readFileSync(__dirname + "/10773.txt")
  .toString()
  .trim()
  .split("\n");

// 0이 나오면 pop 실행.
// reduce 사용할 경우 런타임 에러 발생.
function sum() {
  let stack = [];
  let result = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] !== "0") {
      stack.push(Number(input[i]));
    } else {
      stack.pop();
    }
    console.log(stack);
  }
  for (let i of stack) {
    result += i;
  }
  return result;
}

console.log(sum());

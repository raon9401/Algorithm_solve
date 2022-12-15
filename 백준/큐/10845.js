// https://www.acmicpc.net/problem/10845
const input = require("fs")
  .readFileSync(__dirname + "/10845.txt")
  .toString()
  .trim()
  .split("\n");

function queue() {
  // 명령어 모음
  let queue = []; // 큐
  let answer = "";
  for (let i = 1; i < input.length; i++) {
    let size = queue.length;
    let el = input[i].split(" ");
    switch (el[0]) {
      case "push":
        queue.push(el[1]);
        break;
      case "pop":
        if (size) {
          answer += queue.shift() + "\n";
        } else {
          answer += "-1\n";
        }
        break;
      case "size":
        answer += size + "\n";
        break;
      case "empty":
        if (size) {
          answer += "0\n";
        } else {
          answer += "1\n";
        }
        break;
      case "front":
        if (size) {
          answer += queue[0] + "\n";
        } else {
          answer += "-1\n";
        }
        break;
      case "back":
        if (size) {
          answer += queue[size - 1] + "\n";
        } else {
          answer += "-1\n";
        }
        break;
    }
  }
  console.log(answer);
}
queue();

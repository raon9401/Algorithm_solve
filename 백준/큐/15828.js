/*
    https://www.acmicpc.net/problem/15828
*/

const input = require("fs")
  .readFileSync(__dirname + "/15828.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let [N, ...arr] = input;

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0; // 데이터 삭제 - 배열의 첫번째
    this.rear = 0; // 데이터 추가 - 배열의 마지막
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }

  // 가장 먼저 추가된 데이터가 가장 먼저 추출
  dequeue() {
    // 빈 큐에 dequeue 연산시 에러 방지
    if (this.size() === 0) {
      return;
    }

    //  맨 앞의 데이터가 먼저 추출
    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}

let result = "";
let queue = new Queue();

for (let i of arr) {
  if (i === -1) {
    break;
  }
  if (i !== 0 && N > queue.size()) {
    queue.enqueue(i);
  } else if (i === 0) {
    queue.dequeue();
  }
}
result = Object.values(queue.storage).reduce(
  (acc, cur) => acc + String(cur) + " ",
  ""
);
if (result.length === 0) {
  console.log("empty");
} else {
  console.log(result);
}

/*
    https://www.acmicpc.net/problem/2164 
*/

const input = require("fs")
  .readFileSync(__dirname + "/2164.txt")
  .toString()
  .trim();

let N = Number(input);

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

let queue = new Queue();
for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}
while (queue.size() > 1) {
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}

console.log(queue.storage[queue.front]);

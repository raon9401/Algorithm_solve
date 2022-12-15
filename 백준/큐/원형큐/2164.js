/*
    https://www.acmicpc.net/problem/2164 
*/

const input = require("fs")
  .readFileSync(__dirname + "/2164.txt")
  .toString()
  .trim();

let N = Number(input);

var CircularQueue = function (queueSize) {
  // Array 객체 생성
  this.queue = [];
  // 데이터 가져오는 위치
  this.front = 0;
  // 데이터 넣는 위치
  this.rear = 0;
  // 큐의 크기
  this.queueSize = queueSize;
  // 큐 초기화
  for (var index = 0; index < queueSize; index++) {
    this.queue.push(null);
  }
  this.size = 0;

  // enqueue (큐에 데이터 넣기 함수)
  this.add = function (data) {
    var result = true;
    if (this.isFull()) {
      console.log("Queue Full");
      result = false;
    } else {
      this.rear = (this.rear + 1) % queueSize;
      this.queue[this.rear] = data;
    }
    return result;
  };
  // dnqueue(큐에서 데이터 가져오기 함수)
  this.remove = function () {
    var result = null;
    if (this.isEmpty()) {
      console.log("Queue Empty");
    } else {
      this.front = (this.front + 1) % queueSize;
      result = this.queue[this.front];
      this.queue[this.front] = null;
    }
    return result;
  };
  // 큐에 데이터가 공백 상태인지 확인하는 함수
  this.isEmpty = function () {
    return this.front === this.rear ? true : false;
  };
  // 큐에 데이터가 포화 상태인지 확인하는 함수
  this.isFull = function () {
    return this.front === (this.rear + 1) % this.queueSize ? true : false;
  };
  // 큐 정보 출력 함수 ---- 이부분은 불필요----
  this.consoleLog = function () {
    console.log(this.queue);
    console.log("front: " + this.front + ", rear: " + this.rear);
  };
};

let queue = new CircularQueue(N + 1);
for (let i = 0; i < N; i++) {
  queue.add(i + 1);
}
queue.remove();
queue.consoleLog();
console.log(queue.size);

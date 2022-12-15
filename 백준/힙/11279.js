/*
    https://www.acmicpc.net/problem/11279
    최대힙
*/

let input = require("fs")
  .readFileSync(__dirname + "/11279.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]));
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
      this.swap(this.heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return max;
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;
    let largestIndex = index;

    if (leftIndex < length && this.heap[leftIndex] > this.heap[largestIndex]) {
      largestIndex = leftIndex;
    }

    if (
      rightIndex < length &&
      this.heap[rightIndex] > this.heap[largestIndex]
    ) {
      largestIndex = rightIndex;
    }

    if (largestIndex !== index) {
      this.swap(this.heap, largestIndex, index);
      this.sinkDown(largestIndex);
    }
  }
}

let result = "";
let maxHeap = new MaxHeap();
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    maxHeap.insert(arr[i]);
  } else {
    if (maxHeap.heap.length === 0) {
      result += `0\n`;
    } else {
      result += maxHeap.extractMax() + "\n";
    }
  }
}

console.log(result);

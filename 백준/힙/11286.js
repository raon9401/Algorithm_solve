/*
    https://www.acmicpc.net/problem/11286
    절대값 + 최소힙
*/

const input = require("fs")
  .readFileSync(__dirname + "/11286.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]));
}

class AbsHeap {
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
      if (
        Math.abs(this.heap[parentIndex]) < Math.abs(this.heap[currentIndex]) ||
        (Math.abs(this.heap[parentIndex]) ===
          Math.abs(this.heap[currentIndex]) &&
          this.heap[parentIndex] < this.heap[currentIndex])
      )
        break;
      this.swap(this.heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;
    let smallestIndex = index;

    if (
      (leftIndex < length &&
        Math.abs(this.heap[leftIndex]) < Math.abs(this.heap[smallestIndex])) ||
      (Math.abs(this.heap[leftIndex]) === Math.abs(this.heap[smallestIndex]) &&
        this.heap[leftIndex] < this.heap[smallestIndex])
    ) {
      smallestIndex = leftIndex;
    }

    if (
      (rightIndex < length &&
        Math.abs(this.heap[rightIndex]) < Math.abs(this.heap[smallestIndex])) ||
      (Math.abs(this.heap[rightIndex]) === Math.abs(this.heap[smallestIndex]) &&
        this.heap[rightIndex] < this.heap[smallestIndex])
    ) {
      smallestIndex = rightIndex;
    }

    if (smallestIndex !== index) {
      this.swap(this.heap, index, smallestIndex);
      this.sinkDown(smallestIndex);
    }
  }
}

let result = "";
let minheap = new AbsHeap();
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    minheap.insert(arr[i]);
  } else {
    if (minheap.heap.length === 0) {
      result += `0\n`;
    } else {
      result += minheap.extractMin() + "\n";
    }
  }
}

console.log(result);

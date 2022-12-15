// https://www.acmicpc.net/problem/2750

const input = require("fs")
  .readFileSync(__dirname + "/2750.txt")
  .toString()
  .trim()
  .split("\n");

let [N, ...arr] = input;
for (let i = 0; i < input.length - 1; i++) {
  arr[i] = Number(input[i + 1]);
}

// 내장 정렬
arr.sort((a, b) => a - b);
console.log(arr.reduce((acc, el) => acc + `${el}\n`, ""));

// 버블 정렬
// function bubble(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let swap = "";
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = swap;
//       }
//     }
//     // 모두 정렬이 되어있을 경우 종료 조건.
//     if (swap === "") {
//       console.log("탈출!");
//       break;
//     }
//   }
//   console.log(arr.reduce((acc, el) => acc + `${el}\n`, ""));
// }
// bubble(arr);

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let cur = arr[i];
//     let left = i - 1;
//     while (left >= 0 && arr[left] > cur) {
//       arr[left + 1] = arr[left];
//       arr[left] = cur;
//       left--;
//       //   console.log(arr);
//     }
//   }
//   console.log(arr.reduce((acc, el) => acc + `${el}\n`, ""));
// }

// insertionSort(arr);

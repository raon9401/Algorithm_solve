/*
    https://www.acmicpc.net/problem/11725
*/

let input = require("fs")
  .readFileSync(__dirname + "/11725.txt")
  .toString()
  .trim()
  .split("\n");

let [N, ...arr] = input;
arr = arr.map((el) => el.split(" "));
let graph = {};
let answer = [];
let result = "";

for (let i = 1; i <= Number(N); i++) {
  graph[i] = [];
}
for (let i of arr) {
  graph[i[0]].push(i[1]);
  graph[i[1]].push(i[0]);
}

const bfs = (start) => {
  const visited = [];
  visited[start] = true;

  const queue = [start];

  while (queue.length) {
    const cur = queue.shift();
    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      console.log(next);
      if (!visited[next]) {
        visited[next] = true;
        answer[next] = cur;
        queue.push(next);
      }
    }
  }
};

bfs(1);

for (let i of answer) {
  if (i) {
    result += `${i}\n`;
  }
}
// console.log(result);

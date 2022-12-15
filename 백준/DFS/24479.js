/*
  https://www.acmicpc.net/problem/24479
*/

let input = require("fs")
  .readFileSync(__dirname + "/24479.txt")
  .toString()
  .split("\n");

// console.log(input);
// N : 정점의 수, M : 간선의 수, R : 시작 정점
const [N, M, R] = input[0].split(" ").map((i) => Number(i)); // 구조분해 할당
const edge = input.slice(1).map((e) => e.split(" ").map(Number));

const graph = new Map();
edge.forEach(([from, to]) => {
  if (graph.has(from)) graph.get(from).push(to);
  else graph.set(from, [to]);
  if (graph.has(to)) graph.get(to).push(from);
  else graph.set(to, [from]);
});

let count = 1;
const visited = new Array(N + 1);
const answer = new Array(N).fill(0);

const dfs = (R) => {
  visited[R] = true;
  answer[R - 1] = count++;
  if (!graph.has(R)) return;
  const nodes = [...graph.get(R)].sort((a, b) => b - a);
  for (node of nodes) {
    if (!visited[node]) {
      dfs(node);
    }
  }
};

// dfs(R);
// console.log(answer.join("\n"));

// const graph = {};
// let result = [];
// const makeGraph = (M) => {
//   for (let i = 1; i <= M; i++) {
//     graph[i] = [];
//   }
//   for (let i = 0; i < M; i++) {
//     if (edge[i][1]) {
//       graph[edge[i][0]].push(edge[i][1]);
//       graph[edge[i][1]].push(edge[i][0]);
//     }
//     graph[edge[i][0]].sort((a, b) => a - b);
//   }
// };
// makeGraph(M);

// // 비어있는 부분 확인해야할듯.
// const DFS = (graph, startNode) => {
//   const visited = []; // 탐색을 마친 노드들
//   let needVisit = []; // 탐색해야할 노드들
//   needVisit.push(startNode); // 노드 탐색 시작

//   while (needVisit.length !== 0) {
//     // 탐색해야할 노드가 남아있다면
//     const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
//     if (!visited.includes(node)) {
//       // 해당 노드가 탐색된 적 없다면
//       visited.push(node);
//       needVisit = [...graph[node], ...needVisit];
//     }
//   }

//   result = visited;
//   return result;
// };

// console.log(DFS(graph, R).reduce((acc, el) => acc + `${el}\n`, ""));

// const dfs = (graph, startNode) => {};

// console.log(dfs(graph, R));

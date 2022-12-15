const graph = {
  1: ["2", "3", "8"],
  2: ["1", "4", "5"],
  3: ["1", "7"],
  4: ["2", "5", "8"],
  5: ["2", "4"],
  6: ["7"],
  7: ["3", "6"],
  8: ["1", "4"],
};

const bfs = (graph, startNode) => {
  let needVisit = []; // 탐색해야할 노드들
  let visited = []; // 탐색을 마친 노드들

  needVisit.push(startNode); // 탐색을 시작할 노드

  while (needVisit.length > 0) {
    // 탐색해야할 노드가 남아있지 않을때까지 반복
    // 탐색이 완료된 노드를 탐색해야할 노드에서 제거
    // queue 자료구조를 사용하기 때문에 선입선출
    const node = needVisit.shift();

    // 해당 노드가 탐색된 적이 없는지 확인
    if (!visited.includes(node)) {
      //탐색 후 탐색을 마친 노드들에 추가
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }

  return visited;
};

console.log(bfs(graph, "1"));
// [ '1', '2', '3', '8', '4', '5', '7', '6']

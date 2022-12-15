/*
   n,m은 탈출 위치
   시작 위치(고정) : (0,0)
   탈출 위치(변동) : (4,5)
   출력되는 값 : 10번 이동
   
   상,하,좌,우 확인해야함.
*/
let arr = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

function miro(n, m) {
  // 상 하 좌 우 이동
  let dx = [-1, 1, 0, 0]; // 좌 우 이동
  let dy = [0, 0, -1, 1]; // 상 하 이동

  // 시작 위치
  let x = 0;
  let y = 0;

  // 큐
  let visited = {}; // 방문한 큐 - 객체
  visited[[x, y]] = 1; // 처음 시작점은 1
  let needVisit = []; // 방문이 필요한 큐

  let result = [];

  needVisit.push([x, y]); // 탐색 시작할 좌표

  while (needVisit.length) {
    for (let i = 0; i < needVisit.length; i++) {
      let xy = needVisit.shift();
      result.push(xy);
      for (let j = 0; j < 4; j++) {
        let nx = xy[0] + dx[j];
        let ny = xy[1] + dy[j];
        if (
          // 공간을 벗어났는지 확인
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < m &&
          arr[nx][ny] === 1 && // 1로만 이동할 수 있다.
          !visited[[nx, ny]] // 무조건 0과 1만 들어가있음
        ) {
          needVisit.push([nx, ny]);
          visited[[nx, ny]] = visited[xy] + 1;
        }
      }
    }
  }
  console.log(visited);
  return visited[[n - 1, m - 1]];
}

console.log(miro(5, 6));
// 원하는 출력값 10

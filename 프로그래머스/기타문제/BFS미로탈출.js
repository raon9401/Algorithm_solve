/*
   n,m은 탈출 위치
   시작 위치(고정) : (0,0)
   탈출 위치(변동) : (4,5)
   출력되는 값 : 10번 이동
   
   상,하,좌,우 확인해야함.
*/

function miro(n, m, arr) {}

let arr = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
console.log(miro(5, 6, arr));
// 원하는 출력값 10

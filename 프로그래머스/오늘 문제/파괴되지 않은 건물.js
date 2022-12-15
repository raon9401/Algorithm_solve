/* 
    https://school.programmers.co.kr/learn/courses/30/lessons/92344
    참조사이트 : https://kimjingo.tistory.com/155
    board : 초기 맵 상태
    skill : index [0] : '1'일경우 공격, '2'일 경우 회복
            index [1,2] : 시작 [행,열]
            index [3,4] : 끝 [행,열]
            index [5] : 공격이나 회복의 수치
    
    x + board.length = 다음행의 위치
    1,1 1,2 2,1 2,2

    0   1   2     3   4   5     6   7   8
    1   2   3     4   5   6     7   8   9
   0,0 0,1 0,2   1,0 1,1 1,2   2,0 2,1 2,2
   
   x1 1 
   y1 1
   
   x1*board.length + y1 :시작
   x1*3+y2 :끝수

   1,1~2,2






   3
*/

function solution(board, skill) {
  let answer = 0;
  const row = board.length;
  const col = board[0].length;
  const imos = Array.from({ length: row + 1 }, () => Array(col + 1).fill(0));

  for (let i = 0; i < skill.length; i++) {
    const [type, r1, c1, r2, c2, degree] = skill[i];

    imos[r1][c1] += type === 1 ? -degree : degree;
    imos[r1][c2 + 1] += type === 1 ? degree : -degree;
    imos[r2 + 1][c1] += type === 1 ? degree : -degree;
    imos[r2 + 1][c2 + 1] += type === 1 ? -degree : degree;
  }

  for (let i = 0; i < row; i++) {
    let sum = 0;
    for (let j = 0; j < col; j++) {
      sum += imos[i][j];
      imos[i][j] = sum;
    }
  }

  for (let i = 0; i < col; i++) {
    let sum = 0;
    for (let j = 0; j < row; j++) {
      sum += imos[j][i];
      imos[j][i] = sum;
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      board[i][j] += imos[i][j];
      if (board[i][j] > 0) {
        answer++;
      }
    }
  }

  return answer;
}

// function solution(board, skill) {
//   var answer = 0;
//   for (let i = 0; i < skill.length; i++) {
//     let [type, x1, y1, x2, y2, degree] = skill[i];
//     for (let n = 0; n <= x2 - x1; n++) {
//       for (let m = 0; m <= y2 - y1; m++) {
//         // 공격
//         if (type === 1) {
//           board[x1 + n][y1 + m] -= degree;
//         }
//         // 회복
//         else if (type === 2) {
//           board[x1 + n][y1 + m] += degree;
//         }
//       }
//     }
//   }
//   for (let i of board) {
//     for (let j of i) {
//       if (j > 0) {
//         answer++;
//       }
//     }
//   }
//   return answer;
// }

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
);

// console.log(
//   solution(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     [
//       [1, 1, 1, 2, 2, 4],
//       [1, 0, 0, 1, 1, 2],
//       [2, 2, 0, 2, 0, 100],
//     ]
//   )
// );

/** 
    FRI,SAT,SUN,MON,TUE,WED,THU
    1월 1일 금 
    1월 2일 토
    1월 3일 일
    1월 4일 월
    1월 5일 화
    1월 6일 수
    1월 7일 목
    31 29 31 30 31 30 31 31 30 31 30 31 // 366
    1,3,5,7,8,10,12 : 31일
    2 : 29일
    4,6,9,11 : 30일

    7 14 21 ... 목요일 
    1 8 15 22 ... 금요일
    2 9 16 ... 토요일
    3 10 17 ... 일요일
    4 11 18 ... 월요일
    5 12 19 ... 화요일
    6 13 20 ... 수요일
*/

function solution(a, b) {
  let sum = b;
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  for (let i = 0; i < a - 1; i++) {
    sum += month[i];
  }
  return week[sum % 7];
}

console.log(solution(5, 24));

/*
    차량 번호를 기준으로 입차 출차 시간 체크
    - 시간 자리, 분의 자리 따로 계산
    - 그 시간에 따라 요금 처리
    
    요금
    - 주차시간이 기본시간 이하라면 기본요금을 청구
    - 기본시간 + (주차시간-기본시간)/단위시간 * 요금

    출차 기록 없으면 23:59 에 출차
*/

function solution(fees, records) {
  var answer = [];
  let arr = [];
  let obj = {};
  // 기본시간, 기본 요금, 단위 시간, 단위 요금
  // 식 : ot 보다 작은 시간의 경우 : 기본요금만 냄
  // Math.ceil((주차된 시간 - ot)/ht) *hp+op
  let [ot, op, ht, hp] = fees;
  // 0 : 시간, 1 : 번호, 2 : 주차/출차 여부
  for (let el of records) {
    arr.push(el.split(" "));
  }
  for (let i = 0; i < arr.length; i++) {
    // obj[arr[i][1]][0] = 시간
    // obj[arr[i][1]][1] = 분
    // obj[arr[i][1]][2] = 주차된 시간.
    // obj[arr[i][1]][3] = IN/OUT 판별.
    if (arr[i][2] === "IN") {
      if (obj[arr[i][1]] === undefined)
        obj[arr[i][1]] = [...arr[i][0].split(":"), 0, "IN"];
      else {
        obj[arr[i][1]] = [...arr[i][0].split(":"), obj[arr[i][1]][2], "IN"];
      }
    }
    if (arr[i][2] === "OUT") {
      let timeHour = Number(obj[arr[i][1]][0]);
      let timeMin = Number(obj[arr[i][1]][1]);
      let outTime = arr[i][0].split(":");
      let parkingTime =
        (Number(outTime[0]) - timeHour) * 60 + (Number(outTime[1]) - timeMin);

      obj[arr[i][1]][2] += parkingTime;
      obj[arr[i][1]][3] = "OUT";
    }
  }

  let parkKey = Object.keys(obj).sort((a, b) => a - b);
  // 출차 안한 경우 처리
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i][1]][3] === "IN") {
      let timeHour = Number(obj[arr[i][1]][0]);
      let timeMin = Number(obj[arr[i][1]][1]);
      let parkingTime = (23 - timeHour) * 60 + (59 - timeMin);

      obj[arr[i][1]][2] += parkingTime;
      obj[arr[i][1]][3] = "OUT";
    }
  }
  console.log(obj);
  console.log(parkKey);
  // Math.ceil((주차된 시간 - ot)/ht) *hp+op
  for (let i = 0; i < parkKey.length; i++) {
    let pay = 0;
    if (obj[parkKey[i]][2] > ot) {
      pay = Math.ceil((obj[parkKey[i]][2] - ot) / ht) * hp + op;
    } else {
      pay = op;
    }
    answer.push(pay);
  }
  return answer;
}

let output = solution(
  [180, 5000, 10, 600],
  ["05:34 0100 IN", "06:34 0100 OUT", "18:59 0300 IN", "18:59 0152 IN"]
);

console.log(output);

// let output = solution(
//   [180, 5000, 10, 600],
//   [
//     "05:34 5961 IN",
//     "06:00 0000 IN",
//     "06:34 0000 OUT",
//     "07:59 5961 OUT",
//     "07:59 0148 IN",
//     "18:59 0000 IN",
//     "19:09 0148 OUT",
//     "22:59 5961 IN",
//     "23:00 5961 OUT",
//   ]
// );

// console.log(output);

// output = solution(
//   [120, 0, 60, 591],
//   [
//     "16:00 3961 IN",
//     "16:00 0202 IN",
//     "18:00 3961 OUT",
//     "18:00 0202 OUT",
//     "23:58 3961 IN",
//   ]
// );
// console.log(output);

// output = solution([1, 461, 1, 10], ["00:00 1234 IN"]);
// console.log(output);

/*
    S : 1제곱
    D : 2제곱
    T : 3제곱
    * : 해당 점수 및 바로 전에 얻은 점수 2배로 얻음
        중첩이 가능하다. 4배로 얻게됨
        #과 중첩 될 수 있다. -2배가 된다.
    # : 해당 점수 마이너스 (*-1) 
    
    각 숫자별로 계산하기
*/

// S,D,T에 따른 계산
function calc(num, str) {
  if (str === "S") num = parseInt(num);
  else if (str === "D") num = parseInt(num) ** 2;
  else if (str === "T") num = parseInt(num) ** 3;
  return num;
}

function solution(dartResult) {
  let strArr = [];
  let j = -1; // flag
  let num = "";
  let str = ["S", "D", "T"];
  for (let i = 0; i < dartResult.length; i++) {
    if (str.includes(dartResult[i])) {
      j++;
      if (dartResult[i - 1] === "0" && dartResult[i - 2] === "1") {
        num = "10";
        num = calc(num, dartResult[i]);
        if (dartResult[i + 1] === "#") num = num * -1;
        strArr.push(num);
      } else {
        num = dartResult[i - 1];
        num = calc(num, dartResult[i]);
        if (dartResult[i + 1] === "#") num = num * -1;
        strArr.push(num);
      }
    }
    if (dartResult[i] === "*") {
      strArr[j - 1] *= 2;
      strArr[j] *= 2;
    }
  }
  return strArr.reduce((acc, cur) => acc + cur);
}

// console.log(solution("1S2D*3T"));
// console.log(solution("1D#2S#10S#"));

console.log(solution("1D2S3T*"));

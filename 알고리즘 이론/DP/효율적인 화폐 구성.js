/*
    N가지의 종류의 화폐가 있다.
    화폐들의 개수를 최소한으로 이용해서 그 합이 M원이 되도록 한다.
    불가능할대는 -1을 retrun

    각 화폐는 몇번이든 사용 가능
    2원, 3원 -> 5원 
    1    1
               7원
    2 15
    2가지 종류화폐가 주어지고

    2
    3
    
    점화식 
    k는 화폐 단위 (2,3)
            
     result : 0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15
             -1 -1 ...
    ----------------------------------------------------------------
          2 : 0 -1  1 -1  2 -1  3 -1  4 ...
    ----------------------------------------------------------------
     result   0 -1  1 -1  2 -1  3 -1  4 ...
    ----------------------------------------------------------------
          3 : 0 -1  1  1  2  2  2  3
     
    result[2] -> 1
    i=4 : result[4] -> 2 -> result[i-2] + 1 
    result[6] -> 3 -> result[4] + 1 

    result[i] = result[i-화폐종류] + 1
    result[3] = result[i-2] + 1   //  

    result[7] = result[i-3] + 1   //  



    result[i-2]의 값이 -1일이 아닐경우 규칙 성립.
    result[i-2]의 값이 -1일 경우 규칙이 성립하지 않는다.

    2의 배수/k -> 2 -> result[4] = result[i-k] + 1
    
    
    result[i] = result[i-k] + 1
    result[4] = 4 를 구할 경우 k는 2

    5의 경우 : 2 1개, 3 1개
    
*/

function money(n, m) {
  // 생성되는 배열을 전부 -1로 채워준다.
  let result = [0];

  n.sort((a, b) => a - b);
  //

  for (let i = 1; i <= m; i++) {
    result[i] = -1;
    for (let j = 0; j < n.length; j++) {
      // n 요소의 공배수라면 더 큰 수로 나누는게 화폐가 적게 들어간다.
      if (i % n[j] === 0) {
        result[i] = i / n[j];
      }
      // n의 요소의 배수가 아닐경우
      if (i - n[j] >= 1 && result[i - n[j]] !== -1) {
        result[i] = result[i - n[j]] + 1;
      }
    }
  }
  console.log(result);

  return result[m];
}

// console.log(money([2, 3], 15));
// console.log(money([2, 3], 5));

console.log(money([2, 7], 15));

// console.log(money([2, 4], 15));

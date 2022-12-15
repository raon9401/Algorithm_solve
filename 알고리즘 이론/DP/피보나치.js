// // Recursive
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// Top-Down
function fibonacci(n) {
  let memo = [0, 1];
  function fibo(n) {
    console.log(memo);
    if (memo[n] !== undefined) {
      return memo[n];
    }
    memo[n] = fibo(n - 1) + fibo(n - 2);
    return memo[n];
  }
  return fibo(n);
}

// // Bottom-Up
// function fibonacci(n) {
//   let memo = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     // console.log(memo);
//     memo[i] = memo[i - 1] + memo[i - 2];
//   }
//   return memo[n];
// }

console.log(fibonacci(10));

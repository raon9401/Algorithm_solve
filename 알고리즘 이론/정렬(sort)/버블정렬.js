let arr = [5, 4, 3, 2, 1];

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr);
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
    if (!swap) break;
  }
  console.log(arr);
}
bubble(arr);

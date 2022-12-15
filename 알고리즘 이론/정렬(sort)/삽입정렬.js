let arr = [5, 4, 3, 2, 1];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let left = i - 1;
    while (left >= 0 && arr[left] > cur) {
      console.log(arr);
      arr[left + 1] = arr[left];
      arr[left] = cur;
      left--;
    }
  }
  console.log(arr);
}

insertionSort(arr);

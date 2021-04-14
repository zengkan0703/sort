function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[idx];
    arr[idx] = temp;
  }
  return arr;
}
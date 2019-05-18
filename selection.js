function selectionSort(arr, type = 'asc') {
  for (let i = 0, length = arr.length; i < length; i ++) {
    let idx = i;
    for (let j = i; j < length; j ++) {
      if (type === 'asc' ? arr[j] < arr[idx] : arr[j] > arr[idx]) {
        idx = j;
      }
    }
    [arr[idx], arr[i]] = [arr[i], arr[idx]]
  }
  return arr;
}
function bubbleSort(arr, type = 'asc') {
  arr = [...arr]; //复制一份，避免修改原数组
  let n = arr.length;
  while(n) {
    for (let i = 0, length = arr.length; i < length; i ++) {
      if (type === 'asc' ? arr[i + 1] < arr[i] : arr[i + 1] > arr[i]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; //交换位置
      }
    }
    n --
  }
  return arr;
}
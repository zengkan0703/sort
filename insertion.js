function insertSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j = i - 1; 
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        // 大于当前的往后移动
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    // 插入当前的值
    arr[j + 1] = value;
  }
  return arr;
}
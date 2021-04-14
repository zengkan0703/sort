// 冒泡排序
function bubbleSort(arr) {  
  // 优化标记
  const exchange = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1- i; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        exchange = true;
      }
      // 如果一次循环中没有交换操作，说明当前的数组已经有序了，直接返回即可
      if (!exchange) {
        return arr;
      }
    }
  }
  return arr;
}
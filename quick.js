// 快速排序法
function quickSort(arr) {
  return quickSortHelp(arr, 0, arr.length - 1);
}
function quickSortHelp(arr, l, r) {
  if (l >= r) {
    return;
  }
  // 把 arr 分为三部分，分区点 refer、大于分区点的部分、小于分区点的部分
  const idx = partition(arr, l, r);
  // 递归处理小于分区点的部分
  quickSortHelp(arr, l, idx - 1);
  // 递归处理大于分区点的部分
  quickSortHelp(arr, idx + 1, r);
  return arr;
}

function partition(arr, l, r) {
  const refer = arr[r];
  let i = l;
  for (let j = l; j < r; j ++) {
    if (arr[j] <= refer) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
  const temp = arr[i];
  arr[i] = arr[r];
  arr[r] = temp;
  return i;
}
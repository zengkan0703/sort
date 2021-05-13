// 快速排序法
function quickSort(arr) {
  return quickSortHelp(arr, 0, arr.length - 1);
}
function quickSortHelp(arr, l, r) {
  if (l >= r) {
    return arr;
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
  const referIdx = Math.floor(Math.random() * (r-l)) + l;
  const refer = arr[referIdx];
  arr[referIdx] = arr[r];
  arr[r] = refer;
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



// 第 k 大元素
function kMax(arr, k) {
  return kMaxHelp(arr, 0, arr.length - 1, k);
}
function kMaxHelp(arr, l, r, k) {
  if (l >= r) {
    return arr[l];
  }
  const refer = arr[r];
  let i = l;
  for (let j = l; j < r; j++) {
    if (arr[j] >= refer) {
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
    }
  }
  arr[r] = arr[i];
  arr[i] = refer;
  if (i + 1 === k) {
    return arr[i];
  }
  if (i + 1 < k) {
    return kMaxHelp(arr, i + 1, r, k);
  } else {
    return kMaxHelp(arr, l, i - 1, k);
  }
}

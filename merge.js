// 归并排序
function mergeSort(arr) {
  return mergeSortHelp(arr, 0, arr.length - 1);
}

function mergeSortHelp(arr, l, r) {
  if (l >= r) {
    return;
  }
  // 找到中心点，分为两半
  const middle = Math.floor((l + r) / 2);
  mergeSortHelp(arr, l, middle);
  mergeSortHelp(arr, middle + 1, r);
  let i = l;
  let j = middle + 1;
  const temp = [];
  while (i <= middle && j <= r) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }
  while (i <= middle) {
    temp.push(arr[i]);
    i++;
  }
  while (j <= r) {
    temp.push(arr[j]);
    j++;
  }
  for (let m = 0; m < temp.length; m++) {
    arr[l + m] = temp[m];
  }
  return arr;
}

// 归并排序，更简洁的实现
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = arr.length >> 1;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  const temp = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      temp.push(left.shift())
    } else {
      temp.push(right.shift())
    }
  }
  return temp.concat(left, right);
}
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

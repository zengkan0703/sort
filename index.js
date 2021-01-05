// 冒泡排序
function bubbleSort(arr, type = 'asc') {
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
// 插入排序
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
// 选择排序
function selectionSort(arr) {
  for (let i = 0, length = arr.length; i < length; i ++) {
    let idx = i;
    for (let j = i; j < length; j ++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    [arr[idx], arr[i]] = [arr[i], arr[idx]]
  }
  return arr;
}

// 归并排序
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return arr.reverse();
    } else {
      return arr;
    }
  }
  const middle = Math.floor((arr.length - 1) / 2);
  const left = mergeSort(arr.slice(0, middle + 1));
  const right = mergeSort(arr.slice(middle + 1));
  const res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  if (left.length) {
    res.push(...left);
  } else if (right.length) {
    res.push(...right);
  }
  return res;
}

function mergeSort(arr) {
  return mergeSortHelp(arr, 0, arr.length - 1);
}
function mergeSortHelp(arr, p, q) {
  if (p >= q) {
    return;
  }
  const middle = Math.floor((p + q) / 2);
  mergeSortHelp(arr, p, middle);
  mergeSortHelp(arr, middle + 1, q);
  // 合并
  let i = p;
  let j = middle + 1;
  const temp = [];
  while (i <= middle && j <= q) {
    if (arr[i] < arr[j]) {
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
  while (j <= q) {
    temp.push(arr[j]);
    j++;
  }
  for (let m = 0; m < temp.length; m ++) {
    arr[p + m] = temp[m];
  }
  return arr;
}

function quickSort(arr) {
  return quickSortHelp(arr, 0, arr.length - 1);
}

function quickSortHelp(arr, p, q) {
  if (p >= q) {
    return;
  }
  let i = p;
  const refer = arr[q];
  for (let j = p; j < q; j++) {
    if (arr[j] <= refer) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i ++;
    }
  }
  [arr[i], arr[q]] = [arr[q], arr[i]]
  quickSortHelp(arr, p, i - 1);
  quickSortHelp(arr, i + 1, q);
  return arr
}

a = [];
b = []
c= [];
d=[];
e = [];
for (let i = 0; i <= 100; i++) {
    const temp = JSON.stringify(new Array(1000).fill(0).map(() => Math.random()))
    a.push(JSON.parse(temp))
    b.push(JSON.parse(temp))
    c.push(JSON.parse(temp))
    d.push(JSON.parse(temp))
    e.push(JSON.parse(temp))
}
console.time("冒泡");
a.forEach(d => bubbleSort(d));
console.timeEnd("冒泡")
console.time("insertSort");
b.forEach(d => insertSort(d));
console.timeEnd("insertSort")
console.time("mergeSort");
c.forEach(d => mergeSort(d));
console.timeEnd("mergeSort")
console.time("selectionSort");
d.forEach(d => selectionSort(d));
console.timeEnd("selectionSort")
console.time("quickSort");
e.forEach(d => quickSort(d));
console.timeEnd("quickSort");
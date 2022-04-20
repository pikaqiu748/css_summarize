function test (arr, k) {
  let start;
  let newArr = new Array(arr.length).fill(undefined);
  start = k > arr.length-1 ? k % arr.length : k
  for (let i = 0; i < arr.length; i++) {
    if (start > arr.length - 1) {
      start = 0;
    }
    newArr[start++] = arr[i]
  }
  console.log(newArr)
  return newArr;
}

test([1,2,3,4,5,6],12)
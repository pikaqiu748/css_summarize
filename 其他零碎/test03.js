function test (arr1, arr2) {
  let len1 = arr1.length, len2 = arr2.length;
  let i = 0, j;
  let len = Math.min(len1, len2)
  let res = []
  while (i < len) {
    if (Object.prototype.toString.call(arr1[i]) !== Object.prototype.toString.call(arr2[j])) {
      i++
    } else {
      if (Object.prototype.toString.call(arr1[i]) === '[object array]') {
        if (arr1[])
          for (j = 0; j < arr1[i].length; i++) {
            if (arr1[i][j] !== arr2[i][j]) {
              break
            }
          }
        if (j >= arr1[i].length) {
          res.push(arr1[i])
        }
      }
    }
  }
}
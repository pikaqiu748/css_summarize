function test (str) {
  let res = {};
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1] === str[i]) {
      if (res[str[i]] === undefined) {
        res[str[i]] = 2
      } else {
        count++;
        if (res[str[i]] < count) {
          res[str[i]] = count
        }
      }
    } else {
      if (!res[str[i + 1]]) {
        res[str[i + 1]] = 1
        count = 1;
      } else {
        count = 0;
        count++;
      }
    }
  }
  let maxChar, maxCount = 0;
  let ans = []
  for (let item in res) {
    ans.push(res[item])
  }
  ans.sort((a, b) => b - a)
  let finalres = {}
  for (let item in res) {
    if (res[item] === ans[0]) {
      finalres[item] = ans[0]
    }
  }
  console.log(finalres)
  return finalres;
}


test('abbbbccccddddd')
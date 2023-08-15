// 1 + 2 + 3 + ... + n

// function sum(n) {
//   let a = 0;
//   for (let i = 0; i <= n; i++) {
//     a = a + i;
//   }
//   return a;
// }

function sum(result, i) {
  const newResult = result + i;
  if (i === 1) {
    return newResult;
  }
  return sum(newResult, i - 1);
}

//  sum(0, 10) = sum(10, 9) = sum(19, 8) ... sum(54, 1)

console.log(sum(0, 10));

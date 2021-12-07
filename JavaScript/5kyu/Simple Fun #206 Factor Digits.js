function factDigits(n) {
  if (n === 1)
    return 1;

  let ret = 0;

  while (n > 1) {
    ret += log10(n--);
  }
  return Math.ceil(ret);
}
// n! = x 라 할 떄,
// Math.ceil(log(x)) = n!의 자리수
// log(x) = log(n!) = log(n) + log(n-1) + ... + log(1);

const log10 = (n) => {
  return Math.log(n) / Math.log(10);
}

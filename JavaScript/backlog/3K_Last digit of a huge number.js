function lastDigit(as) {
  console.log(as);
  if (!as.length)
    return 1;

  if (as[0] === 0) {
    return as.size % 2 ? 0 : 1;
  }

  if (as[0] % 10 === 0)
    return 0;

  let LD = parseInt(as[0].toString().split('')[as[0].toString().length - 1]);
  if (as.length === 1 || LD === 1 || LD === 5 || LD === 6)
    return LD;


}

const mod4 = (n) => {
  return n % 4;
}

let digit = [
  [0],
  [1],
  [2, 4, 8, 6],
  [3, 9, 7, 1],
  [4, 6],
  [5],
  [6],
  [7, 9, 3, 1],
  [8, 4, 2, 6],
  [9, 1]
]

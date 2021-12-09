function dataReverse(data) {
  let arr = [];
  let str = data.join('');

  for (let i = 0; i < data.length / 8; i++) {
    arr.push(str.substring(8 * i, 8 * (i + 1)));
  }

  return arr.reverse().join('').split('').map(c => ~~c);
}

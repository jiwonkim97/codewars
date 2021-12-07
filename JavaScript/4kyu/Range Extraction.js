function solution(list) {
  let position = 0;
  let start = 0;
  let arr = [];
  let count = 0;

  while (position < list.length - 1) {
    if (list[position + 1] - list[position] === 1) {
      if (count === 0) {
        start = list[position];
      }
      count++;
    }

    else {
      if (count > 1) {
        count = 0;
        arr.push(start + '-' + list[position]);
        start = 0;
      }
      else if (count === 1) {
        count = 0;
        arr.push(start);
        arr.push(list[position])
      }
      else
        arr.push(list[position]);
    }

    position++;
  }

  arr.push(count > 1 ? start + '-' + list[position] : (count === 1 ? start + ',' + list[position] : list[position]));

  return arr.join(',');
}

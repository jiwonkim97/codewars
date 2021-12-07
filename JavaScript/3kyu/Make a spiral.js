var spiralize = function (size) {
  // insert code here
  let arr = [];
  let x = 0, y = 1;
  let direction = 0;  // 0:right, 1:down, 2:left, 3:up
  let wall = 0;
  let flag = true;
  for (let i = 0; i < size; i++) {
    arr.push(new Array(size).fill(0));
  }

  arr[0][0] = 1;

  while (flag) {
    arr[x][y] = 1;


    switch (direction % 4) {
      case 0:
        if (y + wall >= size - 1) {
          direction++;
          break;
        }
        y++;
        break;
      case 1:
        if (x + wall >= size - 1) {
          direction++;
          break;
        }
        x++;
        break;
      case 2:
        if (y <= wall) {
          wall += 2;
          direction++;
          break;
        }
        y--;
        break;
      case 3:
        if (x <= wall) {
          direction++;
          break;
        }
        x--;
        break;
    }

    if (direction === size)
      break;
  }

  console.log(arr);
  return arr;

}

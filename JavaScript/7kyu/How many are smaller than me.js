function smaller(nums) {
  let ret = [];
  while (nums.length) {
    let i = nums.shift();
    let cnt = 0;
    nums.forEach(c => {
      if (c < i) cnt++;
    })
    ret.push(cnt);
  }
  return ret;
}

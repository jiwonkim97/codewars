function grid(N) {
  // ASCII code 97 = a
  if (N < 0)
    return null;
  let ret = '';
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ret += String.fromCharCode(97 + (i + j) % 26);
      ret += (j === N - 1 ? '' : ' ');
    }
    ret += (i === N - 1 ? '' : '\n');
  }

  return ret
}

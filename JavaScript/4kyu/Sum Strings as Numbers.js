function sumStrings(a, b) {
  if (a === '')
    a = '0';
  if (b === '')
    b = '0';

  let lenA = a.length, lenB = b.length;

  if (lenA > lenB) {                                    // a와 b 중 길이가 더 긴쪽으로 길이 맞추기
    b = '0'.repeat(lenA - lenB) + b;
  }
  else if (lenA < lenB) {
    a = '0'.repeat(lenB - lenA) + a;
  }
  a = ('0' + a).split('').map(c => parseInt(c));
  b = ('0' + b).split('').map(c => parseInt(c));        // 자리수 올림 대비 맨 앞 한자리 추가


  for (let i = Math.max(lenA, lenB); i >= 0; i--) {   // 뒤에서부터 한자리씩 덧셈
    let sum = parseInt(a[i]) + parseInt(b[i]);
    if (sum > 9) {                                      // 자릿수 올림 발생 시 처리
      a[i - 1] += 1;
      sum -= 10;
    }
    a[i] = sum;
  }

  while (a[0] === 0)                                   // 맨앞이 0인 경우 0 전부 지우기
    a.shift();

  return a.join('');
}

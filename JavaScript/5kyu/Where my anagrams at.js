function anagrams(word, words) {
  let ret = [];

  let wordss = words.map(c => {
    return c.split('').sort().join('');
  })
  word = word.split('').sort().join('');

  wordss.map((c, i) => {
    if (c === word)
      ret.push(words[i]);
  })

  return ret;
}

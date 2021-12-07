const solution = (input, markers) => {
  return input.split('\n').map(c => {
    let str = c;
    markers.forEach(marker => {
      str = str.split(marker)[0];
    })
    return str.trim();
  }).join('\n');
}

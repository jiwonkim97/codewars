const SEC = 1,
  MIN = 1 * 60,
  HOUR = 1 * 60 * 60,
  DAY = 1 * 60 * 60 * 24,
  YEAR = 1 * 60 * 60 * 24 * 365;
const UNIT = ['year', 'day', 'hour', 'minute', 'second'];

function formatDuration(seconds) {
  if (seconds === 0)
    return 'now';

  let ret = new Array(5).fill(0);
  let count = 0;

  while (seconds > 0) {
    if (seconds >= YEAR) {
      ret[0] = parseInt(seconds / YEAR);
      count++;
      seconds = seconds % YEAR;
    }
    else if (seconds >= DAY) {
      ret[1] = parseInt(seconds / DAY);
      count++;
      seconds = seconds % DAY;
    }
    else if (seconds >= HOUR) {
      ret[2] = parseInt(seconds / HOUR);
      count++;
      seconds = seconds % HOUR;
    }
    else if (seconds >= MIN) {
      ret[3] = parseInt(seconds / MIN);
      count++;
      seconds = seconds % MIN;
    }
    else {
      ret[4] = seconds;
      count++;
      seconds = 0;
    }
  }

  let str = '';

  ret.map((c, i) => {
    if (c === 0)
      return;
    if (c === 1)
      str += '1 ' + UNIT[i];
    else {
      str += c + ' ' + UNIT[i] + 's';
    }

    if (count === 1)
      return;
    else if (count === 2) {
      str += ' and ';
      count--;
    }
    else {
      str += ', ';
      count--;
    }
  })
  return str;
}

export function formatRelativeTime(targetTime) {
  // Intl 국제 표준 객체
  const rtf = new Intl.RelativeTimeFormat('ko', {
    //auto 혹은 always(숫자)
    numeric: 'auto',
  });
  const currentTime = new Date();
  //양수로 표현
  const timeDifference = Math.abs(targetTime - currentTime);

  //밀리세컨즈기때문에 1000으로 나눠야 기본 초단위가 나온다.
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  //   console.log('seconds', seconds);
  //   console.log('minutes', minutes);
  //   console.log('hours', hours);
  //   console.log('days', days);
  //   console.log('years', years);

  //   이전 시간을 나타내기 위해 -1을 곱한다.
  if (years > 0) {
    return rtf.format(-1 * years, 'year');
  } else if (days > 0) {
    return rtf.format(-1 * days, 'day');
  } else if (hours > 0) {
    return rtf.format(-1 * hours, 'hour');
  } else if (minutes > 0) {
    return rtf.format(-1 * minutes, 'minute');
  } else {
    return rtf.format(-1 * seconds, 'second');
  }
}

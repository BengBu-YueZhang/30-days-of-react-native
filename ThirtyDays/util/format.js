function addAero (n) {
  if (typeof n === 'number') {
    if (n < 10) {
      return `0${n}`
    } else {
      return n
    }
  }
}

export function getMinute (n) {
  return addAero(parseInt(n / (1000 * 60) , 10))
}

export function getSecond (n) {
  let m = n % (1000 * 60)
  return addAero(parseInt(m / 1000 , 10))
}

export function getMillisecond (n) {
  return addAero(parseInt(n % 1000 / 10))
}

export function format (n) {
  let minute = getMinute(n)
  let second = getSecond(n)
  let millisecond = getMillisecond(n)
  return `${minute}:${second}.${millisecond}`
}

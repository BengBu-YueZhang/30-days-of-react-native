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
  return addAero(parseInt(n / 1000 , 10))
}

export function getMillisecond (n) {
  return addAero(parseInt(n % 1000 / 10))
}

export function format (n) {
  let minute = addAero(parseInt(n / (1000 * 60) , 10))
  let second = addAero(parseInt(n / 1000 , 10))
  let millisecond = addAero(parseInt(n % 1000 / 10))
  return `${minute}:${second}.${millisecond}`
}

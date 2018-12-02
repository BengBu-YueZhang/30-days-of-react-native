export const STOPWATCH_START = 'STOPWATCH_START'
export const STOPWATCH_STOP = 'STOPWATCH_STOP'
export const STOPWATCH_COUNT = 'STOPWATCH_COUNT'
export const STOPWATCH_RESET = 'STOPWATCH_RESET'
export const STOPWATCH_MOVE = 'STOPWATCH_MOVE'

export function stopwatchMove (changeTime) {
  return {
    type: STOPWATCH_MOVE,
    changeTime
  }
}

export function stopwatchStart (current) {
  return {
    type: STOPWATCH_START,
    current
  }
}

export function stopwatchStop () {
  return {
    type: STOPWATCH_STOP
  }
}

export function stopwatchReset () {
  return {
    type: STOPWATCH_RESET
  }
}

export function stopwatchCount () {
  return {
    type: STOPWATCH_COUNT,
    time: new Date().getTime()
  }
}

import {
  STOPWATCH_START,
  STOPWATCH_STOP,
  STOPWATCH_COUNT,
  STOPWATCH_RESET
} from '../actions/stopwatch'
import { Map, List } from 'immutable'

const init = Map({
  stopwatchs: List([]),
  start: false
})

function stopwatch (state = init, action) {
  switch (action.type) {
    case STOPWATCH_START:
      return state.set('start', true)
    case STOPWATCH_STOP:
      return state.set('start', false)
    case STOPWATCH_COUNT:
      const { time } = action
      return state.update('stopwatchs', stopwatchs => stopwatchs.push(time))
    case STOPWATCH_RESET:
      return Map({
        stopwatchs: List([]),
        start: false
      })
    default:
      return state
  }
}

export default stopwatch
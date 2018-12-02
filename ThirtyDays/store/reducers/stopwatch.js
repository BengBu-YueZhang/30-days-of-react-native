import {
  STOPWATCH_START,
  STOPWATCH_STOP,
  STOPWATCH_COUNT,
  STOPWATCH_RESET
} from '../actions/stopwatch'
import { Map, List } from 'immutable'

const init = Map({
  stopwatchs: List([]),
  start: false,
  leftText: '复位',
  rightText: '启动'
})

function stopwatch (state = init, action) {
  switch (action.type) {
    case STOPWATCH_START:
      return state.withMutations(function (state) {
        state.set('start', true).set('leftText', '计次').set('rightText', '停止')
      })
    case STOPWATCH_STOP:
      return state.withMutations(function (state) {
        state.set('start', false).set('leftText', '复位').set('rightText', '启动')
      })
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
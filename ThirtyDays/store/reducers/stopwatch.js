import {
  STOPWATCH_START,
  STOPWATCH_STOP,
  STOPWATCH_COUNT,
  STOPWATCH_RESET,
  STOPWATCH_MOVE
} from '../actions/stopwatch'
import { Map, List } from 'immutable'
import format from '../../util/format'

const init = Map({
  stopwatchs: List([]),
  start: false,
  leftText: '复位',
  rightText: '启动',
  init: 0,
  current: 0
})

function stopwatch (state = init, action) {
  switch (action.type) {
    case STOPWATCH_START:
      return state.withMutations(function (state) {
        const { current } = action
        state
        .set('start', true)
        .set('leftText', '计次')
        .set('rightText', '停止')
        .set('init', current)
      })
    case STOPWATCH_STOP:
      return state.withMutations(function (state) {
        state
        .set('start', false)
        .set('leftText', '复位')
        .set('rightText', '启动')
        .set('stopwatchs', List([]))
      })
    case STOPWATCH_COUNT:
      const { time } = action
      // 启动到计次目前的时间
      let current = time - state.get('init')
      return state.update('stopwatchs', stopwatchs => stopwatchs.push(
        format(current)
      ))
    case STOPWATCH_MOVE:
      const { changeTime } = action
      return state.set('current', changeTime)
    case STOPWATCH_RESET:
      return Map({
        stopwatchs: List([]),
        start: false,
        leftText: '复位',
        rightText: '启动',
        init: 0,
        current: 0
      })
    default:
      return state
  }
}

export default stopwatch
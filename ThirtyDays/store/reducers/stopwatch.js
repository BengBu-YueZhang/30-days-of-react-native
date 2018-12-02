import {
  STOPWATCH_START,
  STOPWATCH_STOP,
  STOPWATCH_COUNT,
  STOPWATCH_RESET
} from '../actions/stopwatch'
import { Map, List } from 'immutable'

function addAero (n) {
  if (typeof n === 'number') {
    if (n < 10) {
      return `0${n}`
    } else {
      return n
    }
  }
}

const init = Map({
  stopwatchs: List([]),
  start: false,
  leftText: '复位',
  rightText: '启动',
  init: 0
})

function stopwatch (state = init, action) {
  switch (action.type) {
    case STOPWATCH_START:
      return state.withMutations(function (state) {
        state
        .set('start', true)
        .set('leftText', '计次')
        .set('rightText', '停止')
        .set('init', new Date().getTime())
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
      let minute = addAero(parseInt(current / (1000 * 60) , 10))
      let second = addAero(addAeroparseInt(current / 1000 , 10))
      let millisecond = addAero(parseInt(current % 1000 / 10))
      return state.update('stopwatchs', stopwatchs => stopwatchs.push(
        `${minute}:${second}.${millisecond}`
      ))
    case STOPWATCH_RESET:
      return Map({
        stopwatchs: List([]),
        start: false,
        leftText: '复位',
        rightText: '启动',
        init: 0
      })
    default:
      return state
  }
}

export default stopwatch
import { Map } from 'immutable'
import stopwatch from './stopwatch'

function reducer (state = Map({}), action) {
  return Map({
    stopwatch: stopwatch(state.get('stopwatch'), action)
  })
}

export default reducer

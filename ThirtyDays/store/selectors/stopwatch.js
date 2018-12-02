import { createSelector } from 'reselect'

export const getStopwatchs = createSelector(
  [state => state.getIn(['stopwatch', 'stopwatchs'])]
)

export const getStatus = createSelector(
  [state => state.getIn(['stopwatch', 'start'])]
)

export const getLeftText = createSelector(
  [state => state.getIn(['stopwatch', 'leftText'])]
)

export const getRightText = createSelector(
  [state => state.getIn(['stopwatch', 'rightText'])]
)

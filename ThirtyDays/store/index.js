import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import rootSaga from './saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  reducers,
  applyMiddleware(
    sagaMiddleware
  )
)

sagaMiddleware.run(rootSaga)

export default store

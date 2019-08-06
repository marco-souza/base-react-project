import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { initialState, rootEpic, rootReducer } from './root'

const epicMiddleware = createEpicMiddleware()
const composeEnhancers = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose
)

export const generateStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    ),
  )
  epicMiddleware.run(rootEpic)
  return store
}

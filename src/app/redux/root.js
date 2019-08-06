/**
 * NOTE: this file is used to aggregate all redux initialStates,
 * reducers and epics (redux-observables).
 *
 * Change it every time you add a new duck.
*/
import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import * as auth from './auth'

// Initial State
export const initialState = {
  auth: auth.initialState,
}

// Reducers
export const rootReducer = combineReducers({
  auth: auth.reducer,
})

// Epics
export const rootEpic = combineEpics(
  auth.epics,
)

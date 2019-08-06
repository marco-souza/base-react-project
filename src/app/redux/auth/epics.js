/**
 * NOTE: Epics are used to take care of side-effects in redux.
 * They are action streamers which can be subscribed.
 *
 * Refs: [rxjs, redux-observable]
 */
import { tap, map, delay } from 'rxjs/operators'
import { ofType, combineEpics } from 'redux-observable'

import {
  // Actions
  setAuthKey,
  // Types
  LOGIN,
  VALIDATE_AUTH_KEY,
} from './constants'

export const login = (action$, state$) => action$.pipe(
  ofType(LOGIN),
  delay(1000),
  map(({ payload }) => setAuthKey(payload)),
  tap(console.log),
)

export const validateAuthKey = (action$, state$) => action$.pipe(
  ofType(VALIDATE_AUTH_KEY),
  delay(1000),
  map(({ payload }) => setAuthKey(payload)),
  tap(alert),
)

export default combineEpics(
  validateAuthKey,
  login,
)

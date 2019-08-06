import { createAction } from 'app/helpers/redux'

const duckNamePrefix = 'AUTH'

// Redux Types
export const LOGIN = `${duckNamePrefix}/LOGIN`
export const SET_AUTH_KEY = `${duckNamePrefix}/SET_AUTH_KEY`
export const VALIDATE_AUTH_KEY = `${duckNamePrefix}/VALIDATE_AUTH_KEY`

// Redux Actions (format: { type, payload })
export const login = createAction(LOGIN)
export const setAuthKey = createAction(SET_AUTH_KEY)
export const validateAuthKey = createAction(VALIDATE_AUTH_KEY)

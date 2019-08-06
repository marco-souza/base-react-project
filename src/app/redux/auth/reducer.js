/**
 * NOTE: this file is the reducer, function which effectively changes
 * redux state.
 */
import {
  LOGIN,
  SET_AUTH_KEY,
  VALIDATE_AUTH_KEY,
} from './constants'

export const initialState = {
  authKey: null,
  loading: {
    authKey: false
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_KEY:
      return {
        authKey: action.payload,
        loading: {
          authKey: false,
        },
      }

    case LOGIN:
    case VALIDATE_AUTH_KEY:
      return {
        ...state,
        loading: {
          authKey: true,
        },
      }

    default:
      return state
  }
}

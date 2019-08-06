export const generateNewState = (state, key, payload) => ({
  ...state,
  [key]: payload,
})

export const createAction = type =>
  payload => ({ type, payload })

export const duckStateToProps = key =>
  state => state[key]

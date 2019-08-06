import { connect } from 'react-redux'

import { login, validateAuthKey } from './constants'
// Make easy to import all important ducks information
import reducer, { initialState } from './reducer'
import epics from './epics'

import { duckStateToProps } from 'app/helpers/redux'

const mapDispatchToProps = (dispatch, props) => ({
  login: data => dispatch(login(data)),
  validateAuthKey: data => dispatch(validateAuthKey()),
})

export default connect(duckStateToProps('auth'), mapDispatchToProps)
export {
  reducer,
  epics,
  initialState,
}

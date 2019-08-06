import useAuth from 'app/redux/auth'
import Component from './component'

let ComposedComponent = useAuth(Component)

export default ComposedComponent

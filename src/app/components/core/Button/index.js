import styled from 'styled-components'

import theme from 'app/helpers/theme'

const { bg, text } = theme

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => bg[props.primary ? 'primary' : 'secondary']};
  color: ${props => text[props.primary ? 'primary' : 'secondary']};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${bg.primary};
  border-radius: 3px;
`

export default Button

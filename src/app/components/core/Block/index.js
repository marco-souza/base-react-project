import styled from 'styled-components'

import theme from 'app/helpers/theme'

const { bg, text } = theme
const Block = styled.div`
  background: ${bg['primary']};
  color: ${text['primary']};
  font-size: 1em;
  padding: 3em;
  text-align: center;
`

export default Block

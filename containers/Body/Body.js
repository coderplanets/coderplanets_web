import styled from 'styled-components'

import { theme } from '../../utils/functions'

const Content = styled.div`
  padding-left: 65px;
  position: relative;
  height: 100vh;
  background: ${theme('body_bg')};
  transition: background-color 0.3s;
`

export default Content

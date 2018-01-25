import styled from 'styled-components'

import { theme } from '../../../utils'

export const CardWrapper = styled.div`
  width: 450px;
  height: auto;
  background: ${theme('code.bg')};
  margin: 10px;
  margin-right: 20px;
  overflow-y: scroll;
`

export { default as CheatSheetStyle } from './CheatSheetStyle'

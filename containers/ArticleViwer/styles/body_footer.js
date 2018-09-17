import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Divider = styled(Img)`
  fill: ${theme('editor.footer')};
  width: 10px;
  height: 10px;
  margin-left: 4px;
  margin-right: 4px;
`

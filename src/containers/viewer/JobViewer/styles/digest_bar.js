import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-both')};
  margin-top: 12px;
  flex-wrap: wrap;
`
export const Divider = styled(Img)`
  fill: ${theme('editor.footer')};
  width: 10px;
  height: 15px;
  margin-left: 4px;
  margin-right: 4px;
  display: block;
`

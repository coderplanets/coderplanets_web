import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  margin-top: 12px;
  flex-wrap: wrap;
`
export const Divider = styled(Img)`
  fill: ${theme('editor.footer')};
  ${css.size(12)};
  margin-left: 4px;
  margin-right: 4px;
`

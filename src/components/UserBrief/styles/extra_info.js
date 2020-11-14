import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Section = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-bottom: 10px;
`
export const Desc = styled.div``
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 16px;
  height: 16px;
  margin-right: 10px;
  display: block;
`

import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
export const Avatar = styled(Img)`
  ${css.circle(20)};
  margin-right: 5px;
  margin-bottom: 6px;
`
export const PopInfo = styled.div`
  padding: 5px 10px;
  color: ${theme('thread.articleTitle')};
`

import styled from 'styled-components'

import { theme, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;
`
export const Avatar = styled(Img)`
  ${cs.circle('20px')};
  display: block;
  margin-right: 5px;
  margin-bottom: 6px;
`
export const PopInfo = styled.div`
  padding: 5px 10px;
  color: ${theme('thread.articleTitle')};
`

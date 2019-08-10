import styled from 'styled-components'

import { theme, cs } from '@utils'
import Img from '@Img'

export const Wrapper = styled.div`
  ${cs.flexColumn('justify-center')};
  align-items: center;
`

export const BadgeWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 4px;
`

export const BadgeIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  display: block;
  width: 12px;
  height: 12px;
  margin-right: 3px;
`
export const BadgeTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.75rem;
`

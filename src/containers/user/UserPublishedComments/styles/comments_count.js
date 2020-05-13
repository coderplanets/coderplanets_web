import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexGrow('align-center')};
  color: ${theme('thread.articleDigest')};
`
export const FloorNum = styled.div`
  color: ${theme('comment.floor')};
  font-size: 0.9rem;
  margin-right: 3px;
`
export const Total = styled.div`
  margin-left: 3px;
  font-size: 0.9rem;
`

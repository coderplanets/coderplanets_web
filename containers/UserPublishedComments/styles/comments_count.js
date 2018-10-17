import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
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

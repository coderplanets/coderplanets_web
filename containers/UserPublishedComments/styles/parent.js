import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  flex-grow: 1;
  font-size: 0.9rem;
`

import styled from 'styled-components'

import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`

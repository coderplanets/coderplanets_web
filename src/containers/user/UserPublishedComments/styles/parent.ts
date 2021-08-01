import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`

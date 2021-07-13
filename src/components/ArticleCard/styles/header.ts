import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div``

export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  ${css.media.mobile`
    ${css.cutRest('150px')};
  `};
`

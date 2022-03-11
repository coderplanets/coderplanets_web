import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.a`
  ${css.cutRest('50px')};
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-left: 0;
  margin-right: 8px;
  text-decoration: none;
`

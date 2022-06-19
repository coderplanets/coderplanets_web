import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexGrow('align-center')};
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.a`
  ${css.lineClamp(1)};
  color: ${theme('thread.articleTitle')};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
`

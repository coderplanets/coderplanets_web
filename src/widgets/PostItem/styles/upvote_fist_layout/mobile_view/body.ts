import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexGrow('align-center')};
  margin-bottom: 4px;
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.a`
  color: ${theme('thread.articleTitle')};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    text-decoration: none;
    color: ${theme('thread.articleTitle')};
  }
`

import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.article`
  ${css.flex('justify-start', 'align-center')};
  position: relative;
  margin-top: 45px;
  margin-bottom: 30px;
`
export const Tag = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  padding: 2px 10px;
  background: #023c4a;
  border-radius: 4px;
  margin-right: 12px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
export const Dot = styled.div`
  background: ${({ bgColor }) => bgColor};
  ${css.circle('6px')};
  margin-right: 6px;
  opacity: ${theme('tags.dotOpacity')};
`

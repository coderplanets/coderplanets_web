import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  padding-right: 10px;
`
export const HintHolder = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  padding-left: 5px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`

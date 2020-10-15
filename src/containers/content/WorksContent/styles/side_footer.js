import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  border-top: 1px solid;
  border-top-color: #004353;
  margin-top: 50px;
  padding-top: 15px;
  width: 90%;
`
export const Item = styled.div`
  color: ${theme('thread.articleDigest')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`

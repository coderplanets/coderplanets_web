import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
  position: relative;
`
export const Main = styled.div`
  ${css.flexColumnGrow()};
  margin-left: 6px;
`
export const DigestWrapper = styled.div`
  ${css.cutRest('530px')};
  color: ${theme('thread.articleDigest')};
  margin-top: 6px;
  margin-bottom: 12px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`

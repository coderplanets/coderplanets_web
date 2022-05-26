import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import DotDivider from '@/widgets/DotDivider'

export const Wrapper = styled.div``
export const DigestWrapper = styled.div`
  ${css.cutRest('500px')};
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
export const Extra = styled.li`
  position: relative;
  ${css.flex('align-end')};
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
`
export const LeftPart = styled.div`
  ${css.flex('align-center')};
`

export const Dot = styled(DotDivider)`
  background-color: ${theme('thread.articleDigest')};
  margin-right: 8px;
`
export const ArticleStateBadgeWrapper = styled.div`
  position: absolute;
  top: 41px;
  right: -5px;
`
